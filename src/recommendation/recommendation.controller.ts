import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { smartGiftBotConfig } from 'src/integrationSpecFile';
import { log } from 'console';
import { TelexMessageDto } from './gift-input-dto';
import { EmbedBuilder } from 'discord.js';
import { DiscordService } from 'src/discord/discord.service';

@Controller('recommendation')
export class RecommendationController {
  constructor(
    private recommendationsService: RecommendationService,
    private discordService: DiscordService,
  ) {}

  @Get('/integration-specs')
  getIntegrationSpecFile() {
    return smartGiftBotConfig;
  }

  @Post('/webhooks')
  async getTelexMessages(@Body() body: TelexMessageDto) {
    const cleanMessage = body.message.replace(/<[^>]*>?/gm, '');
    log('Clean message: ', cleanMessage);
  
    try {
      // Generate recommendations based on the user's message
      const recommendations =
        await this.recommendationsService.generateRecommendations(cleanMessage);
  
      log(`Gift recommendations: ${JSON.stringify(recommendations)}`);
  
      // Ensure recommendations is a string
      const message = Array.isArray(recommendations)
        ? recommendations.map((gift, i) => `${i + 1}. ${gift}`).join('\n')
        : recommendations;
  
      // Send a plain text message (no embed)
      return this.discordService.sendMessage(message);
    } catch (error) {
      log('Error generating recommendations:', error);
      return {
        status: 'error',
        message: 'An error occurred while generating recommendations.',
      };
    }
  }
  
  // async getTelexMessages(@Body() body: TelexMessageDto) {
  //   const cleanMessage = body.message.replace(/<[^>]*>?/gm, '');
  //   log('Clean message: ', cleanMessage);

  //   const content = 'Hello, Discord!';
  //   const title = 'Gift Bot';
  //   const description = "Response from telex";
  //   const color = '#FF0000'; // Optional, default is green

  //   try {
  //     // Generate recommendations based on the user's message
  //     const recommendations =
  //       await this.recommendationsService.generateRecommendations(cleanMessage);

  //     log(`Gift recommendations: ${JSON.stringify(recommendations)}`);

  //     const message = Array.isArray(recommendations)
  // ? recommendations.join('\n') // Convert array to formatted string
  // : recommendations;

  //     const embed = new EmbedBuilder()
  //       .setTitle(title)
  //       .setDescription(description)
  //       .setColor(color ? parseInt(color.replace('#', '0x'), 16) : 0x00ff00); // Default to green if no color is provided

  //     return this.discordService.sendMessage(message, embed);
  //   } catch (error) {
  //     log('Error generating recommendations:', error);
  //     return {
  //       status: 'error',
  //       message: 'An error occurred while generating recommendations.',
  //     };
  //   }
  // }
}
