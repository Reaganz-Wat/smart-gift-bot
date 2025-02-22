import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { smartGiftBotConfig } from 'src/integrationSpecFile';
import { log } from 'console';
import { TelexMessageDto } from './gift-input-dto';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationsService: RecommendationService) {}

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

      return {
        status: 'success',
        message: `Gift recommendations: ${JSON.stringify(recommendations)}`,
      };
    } catch (error) {
      log('Error generating recommendations:', error);
      return {
        status: 'error',
        message: 'An error occurred while generating recommendations.',
      };
    }
  }
}
