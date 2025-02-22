import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { smartGiftBotConfig } from '../integrationSpecFile';
import { log } from 'console';
import { TelexMessageDto } from './gift-input-dto';
import { DiscordService } from '../discord/discord.service';

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
}
