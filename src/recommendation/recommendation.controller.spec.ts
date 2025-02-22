import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { DiscordService } from '../discord/discord.service';
import { TelexMessageDto } from './gift-input-dto';
import { smartGiftBotConfig } from '../integrationSpecFile';

describe('RecommendationController', () => {
  let controller: RecommendationController;
  let recommendationService: RecommendationService;
  let discordService: DiscordService;

  // Mock services
  const mockRecommendationService = {
    generateRecommendations: jest.fn(),
  };

  const mockDiscordService = {
    sendMessage: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationController],
      providers: [
        {
          provide: RecommendationService,
          useValue: mockRecommendationService,
        },
        {
          provide: DiscordService,
          useValue: mockDiscordService,
        },
      ],
    }).compile();

    controller = module.get<RecommendationController>(RecommendationController);
    recommendationService = module.get<RecommendationService>(RecommendationService);
    discordService = module.get<DiscordService>(DiscordService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getIntegrationSpecFile', () => {
    it('should return smartGiftBotConfig', () => {
      const result = controller.getIntegrationSpecFile();
      expect(result).toBe(smartGiftBotConfig);
    });
  });

  describe('getTelexMessages', () => {
    const mockMessage: TelexMessageDto = {
      message: 'Test <html>message</html>',
      settings: [] // Adding the required settings property
    };

    it('should process message and return discord service response for array recommendations', async () => {
      const mockRecommendations = ['Gift 1', 'Gift 2'];
      const expectedFormattedMessage = '1. Gift 1\n2. Gift 2';
      const mockDiscordResponse = { status: 'success' };

      mockRecommendationService.generateRecommendations.mockResolvedValue(mockRecommendations);
      mockDiscordService.sendMessage.mockResolvedValue(mockDiscordResponse);

      const result = await controller.getTelexMessages(mockMessage);

      expect(mockRecommendationService.generateRecommendations).toHaveBeenCalledWith('Test message');
      expect(mockDiscordService.sendMessage).toHaveBeenCalledWith(expectedFormattedMessage);
      expect(result).toBe(mockDiscordResponse);
    });

    it('should process message and return discord service response for string recommendations', async () => {
      const mockRecommendations = 'Single recommendation';
      mockRecommendationService.generateRecommendations.mockResolvedValue(mockRecommendations);
      mockDiscordService.sendMessage.mockResolvedValue({ status: 'success' });

      const result = await controller.getTelexMessages(mockMessage);

      expect(mockRecommendationService.generateRecommendations).toHaveBeenCalledWith('Test message');
      expect(mockDiscordService.sendMessage).toHaveBeenCalledWith(mockRecommendations);
      expect(result).toEqual({ status: 'success' });
    });

    it('should handle errors and return error response', async () => {
      mockRecommendationService.generateRecommendations.mockRejectedValue(new Error('Test error'));

      const result = await controller.getTelexMessages(mockMessage);

      expect(result).toEqual({
        status: 'error',
        message: 'An error occurred while generating recommendations.',
      });
    });

    it('should properly clean HTML tags from message', async () => {
      const complexMessage: TelexMessageDto = {
        message: '<div>Test</div><p>Complex<span>HTML</span></p>',
        settings: [] // Adding the required settings property
      };

      await controller.getTelexMessages(complexMessage);

      expect(mockRecommendationService.generateRecommendations).toHaveBeenCalledWith('TestComplexHTML');
    });

  });
});