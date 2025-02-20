import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config()

@Injectable()
export class GoogleAiService {

    private genAI: GoogleGenerativeAI;
    private model: "gemini-pro";


    constructor(apiKey: string) {
        this.genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
    }

    async getGiftRecommendations(age: number, budget: number, interests: string[]): Promise<string[]> {
        const prompt = `Suggest three gift ideas under ${budget} USD for a person aged ${age} who is interested in ${interests.join(", ")}.`;
    
        try {
          const model = this.genAI.getGenerativeModel({ model: this.model });
          const result = await model.generateContent(prompt);
          const response = result.response.text();
    
          return response.split("\n").filter((gift) => gift.trim() !== "");
        } catch (error) {
          console.error("Google AI API Error:", error);
          return ["Sorry, I couldn't generate recommendations at the moment."];
        }
      }
}
