import { Injectable } from '@nestjs/common';
import { GoogleAiService } from 'src/google-ai/google-ai.service';

@Injectable()
export class RecommendationService {
  constructor(private readonly googleAIService: GoogleAiService) {}

  // Method for generating gift recommendations based on the user's free-form message
  async generateRecommendations(message: string) {
    // const prompt = `Analyze the following message and suggest
    // three gift ideas based on the user's needs and interests.
    // The user might mention things like their budget, interests,
    // or the type of person they are shopping for
    // (e.g., age, gender, hobbies, or special occasions).
    // Consider edge cases such as vague descriptions, limited budgets,
    // or unusual interests. Respond with gift recommendations only.

    // Key Areas to Focus On:
    // 1. **Budget**: Identify if the user specifies a budget range (e.g., "under $50" or "affordable").
    // 2. **Interests**: Extract hobbies, passions, or preferences mentioned (e.g., "loves cooking," "into gaming," "enjoys outdoor activities").
    // 3. **Recipient Details**: Note age, gender, or relationship (e.g., "for my 10-year-old nephew," "for my wife").
    // 4. **Occasion**: Identify if the gift is for a specific event (e.g., birthday, anniversary, holiday).
    // 5. **Edge Cases**: Handle vague messages (e.g., "I need a gift"), unusual interests, or no budget mentioned by providing creative and versatile recommendations.

    // Message: "${message}"

    // Gift Recommendations:`;

    const prompt = `Suggest three gift ideas based on the user's message.  
Consider budget, interests, recipient details (age, gender, relationship), and occasion.  
Handle vague inputs by offering versatile recommendations.  

Message: "${message}"  

Gift Recommendations:`;

    try {
      const recommendations =
        await this.googleAIService.getGiftRecommendationsFromPrompt(prompt);

      if (!recommendations || recommendations.length === 0) {
        return [
          "Sorry, I couldn't generate any gift recommendations based on the provided message.",
        ];
      }

      return recommendations;
    } catch (error) {
      console.error('Error generating recommendations:', error);
      return ["Sorry, I couldn't generate recommendations at the moment."];
    }
  }
}
