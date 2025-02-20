import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';

@Controller('recommendation')
export class RecommendationController {
    constructor(private recommendationsService: RecommendationService) {}

    @Get()
    async getRecommendations(
      @Query('age') age: number,
      @Query('budget') budget: number,
      @Query('interests') interests: string
    ) {
      return await this.recommendationsService.generateRecommendations(age, budget, interests);
    }
}
