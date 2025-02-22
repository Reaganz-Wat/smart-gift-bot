import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GoogleAiService {
  private genAI: GoogleGenerativeAI;
  private model: string = 'gemini-pro';

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
  }

  // Method for generating gift recommendations from the user's free-form message
  async getGiftRecommendationsFromPrompt(prompt: string): Promise<string[]> {
    try {
      const model = this.genAI.getGenerativeModel({ model: this.model });
      const result = await model.generateContent(prompt);
      const response = result.response.text();

      // Handle case where the response might be empty or malformed
      const recommendations = response
        .split('\n')
        .filter((gift) => gift.trim() !== '');
      if (recommendations.length === 0) {
        return ["Sorry, I couldn't generate any gift recommendations."];
      }

      return recommendations;
    } catch (error) {
      console.error('Google AI API Error:', error);
      return ["Sorry, I couldn't generate recommendations at the moment."];
    }
  }
}