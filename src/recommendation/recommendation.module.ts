import { Module } from '@nestjs/common';
import { DiscordModule } from '../discord/discord.module';
import { GoogleAiModule } from '../google-ai/google-ai.module';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';

@Module({
  imports: [GoogleAiModule, DiscordModule],
  providers: [RecommendationService],
  controllers: [RecommendationController]
})
export class RecommendationModule {}
