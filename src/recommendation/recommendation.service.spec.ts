import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationService } from './recommendation.service';
import { GoogleAiService } from '../google-ai/google-ai.service';

describe('RecommendationService', () => {
  let recommendationService: RecommendationService;
  let googleAiService: GoogleAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecommendationService,
        {
          provide: GoogleAiService,
          useValue: {
            getGiftRecommendationsFromPrompt: jest.fn(),
          },
        },
      ],
    }).compile();

    recommendationService = module.get<RecommendationService>(RecommendationService);
    googleAiService = module.get<GoogleAiService>(GoogleAiService);
  });

  it('should be defined', () => {
    expect(recommendationService).toBeDefined();
  });

  describe('generateRecommendations', () => {
    it('should return recommendations when GoogleAiService returns valid data', async () => {
      const message = 'I need a gift for my 10-year-old nephew who loves gaming';
      const mockRecommendations = ['Gaming console', 'Game controller', 'Gaming headset'];

      googleAiService.getGiftRecommendationsFromPrompt = jest
        .fn()
        .mockResolvedValue(mockRecommendations);

      const result = await recommendationService.generateRecommendations(message);
      expect(result).toEqual(mockRecommendations);
    });

    it('should return a default message when no recommendations are generated', async () => {
      const message = 'I need a gift for my 10-year-old nephew';
      const mockRecommendations: string[] = [];

      googleAiService.getGiftRecommendationsFromPrompt = jest
        .fn()
        .mockResolvedValue(mockRecommendations);

      const result = await recommendationService.generateRecommendations(message);
      expect(result).toEqual([
        "Sorry, I couldn't generate any gift recommendations based on the provided message.",
      ]);
    });

    it('should return an error message when GoogleAiService throws an error', async () => {
      const message = 'I need a gift for my 10-year-old nephew';
      const mockError = new Error('Service error');

      googleAiService.getGiftRecommendationsFromPrompt = jest
        .fn()
        .mockRejectedValue(mockError);

      const result = await recommendationService.generateRecommendations(message);
      expect(result).toEqual(["Sorry, I couldn't generate recommendations at the moment."]);
    });
  });
});
