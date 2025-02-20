import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleAiModule } from './google-ai/google-ai.module';
import { RecommendationModule } from './recommendation/recommendation.module';

@Module({
  imports: [GoogleAiModule, RecommendationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
