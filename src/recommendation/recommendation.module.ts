import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationController } from './recommendation.controller';
import { GoogleAiModule } from 'src/google-ai/google-ai.module';

@Module({
  imports: [GoogleAiModule],
  providers: [RecommendationService],
  controllers: [RecommendationController]
})
export class RecommendationModule {}
