import { Injectable } from '@nestjs/common';
import { GoogleAiService } from 'src/google-ai/google-ai.service';

@Injectable()
export class RecommendationService {
    constructor(private readonly googleAIService: GoogleAiService) {}

  async generateRecommendations(age: number, budget: number, interests: string) {
    const interestsArray = interests.split(',');
    const recommendations = await this.googleAIService.getGiftRecommendations(age, budget, interestsArray);

    // Convert recommendations into shareable links
    const recommendationLinks = recommendations.map((gift) => ({
      name: gift,
      link: `https://example.com/gifts?query=${encodeURIComponent(gift)}`,
    }));

    return { recommendations: recommendationLinks };
  }
}
