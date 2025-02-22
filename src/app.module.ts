import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleAiModule } from './google-ai/google-ai.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [GoogleAiModule, RecommendationModule, DiscordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
