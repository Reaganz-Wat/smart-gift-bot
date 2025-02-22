import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAiService } from './google-ai.service';
import { GoogleGenerativeAI } from '@google/generative-ai';

jest.mock('@google/generative-ai');

describe('GoogleAiService', () => {
  let googleAiService: GoogleAiService;
  let mockGenerateContent: jest.Mock;
  let mockGetGenerativeModel: jest.Mock;

  beforeEach(async () => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Create mock for generateContent
    mockGenerateContent = jest.fn();

    // Create mock for getGenerativeModel
    mockGetGenerativeModel = jest.fn().mockReturnValue({
      generateContent: mockGenerateContent
    });

    // Mock the GoogleGenerativeAI constructor
    (GoogleGenerativeAI as jest.Mock).mockImplementation(() => ({
      getGenerativeModel: mockGetGenerativeModel
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleAiService],
    }).compile();

    googleAiService = module.get<GoogleAiService>(GoogleAiService);
  });

  it('should be defined', () => {
    expect(googleAiService).toBeDefined();
  });

  it('should generate gift recommendations successfully', async () => {
    const mockResult = {
      response: {
        text: () => 'Gift Idea 1\nGift Idea 2\nGift Idea 3'
      }
    };
    
    mockGenerateContent.mockResolvedValue(mockResult);

    const prompt = 'I need a gift for my friend who loves music';
    const recommendations = await googleAiService.getGiftRecommendationsFromPrompt(prompt);

    expect(mockGenerateContent).toHaveBeenCalledWith(prompt);
    expect(recommendations).toBe('1. Gift Idea 1\n2. Gift Idea 2\n3. Gift Idea 3');
  });

  it('should handle empty recommendations', async () => {
    const mockResult = {
      response: {
        text: () => ''
      }
    };
    
    mockGenerateContent.mockResolvedValue(mockResult);

    const prompt = 'A gift for someone who loves surprises';
    const recommendations = await googleAiService.getGiftRecommendationsFromPrompt(prompt);

    expect(mockGenerateContent).toHaveBeenCalledWith(prompt);
    expect(recommendations).toBe("Sorry, I couldn't generate any gift recommendations.");
  });

  it('should handle API errors gracefully', async () => {
    mockGenerateContent.mockRejectedValue(new Error('Google AI API Error'));

    const prompt = 'A gift for an artist';
    const recommendations = await googleAiService.getGiftRecommendationsFromPrompt(prompt);

    expect(mockGenerateContent).toHaveBeenCalledWith(prompt);
    expect(recommendations).toBe("Sorry, I couldn't generate any gift recommendations.");
  });
});