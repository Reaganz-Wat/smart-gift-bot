import { Test, TestingModule } from '@nestjs/testing';
import { DiscordService } from './discord.service';
import axios from 'axios';
import { EmbedBuilder } from 'discord.js';

jest.mock('axios'); // Mock axios to avoid real API calls

describe('DiscordService', () => {
  let discordService: DiscordService;
  let axiosPostMock: jest.Mock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscordService],
    }).compile();

    discordService = module.get<DiscordService>(DiscordService);
    axiosPostMock = axios.post as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(discordService).toBeDefined();
  });

  it('should send a message without an embed', async () => {
    axiosPostMock.mockResolvedValue({ data: 'OK' });

    const response = await discordService.sendMessage('Hello, Discord!');
    expect(axiosPostMock).toHaveBeenCalledWith(
      process.env.DISCORD_URL,
      {
        content: 'Hello, Discord!',
        embeds: [],
      }
    );
    expect(response).toBe('OK');
  });

  it('should send a message with an embed', async () => {
    axiosPostMock.mockResolvedValue({ data: 'OK' });

    const embed = new EmbedBuilder().setTitle('Test Embed');
    const response = await discordService.sendMessage('Hello with Embed!', embed);

    expect(axiosPostMock).toHaveBeenCalledWith(
      process.env.DISCORD_URL,
      {
        content: 'Hello with Embed!',
        embeds: [embed.toJSON()],
      }
    );
    expect(response).toBe('OK');
  });

  it('should throw an error if the request fails', async () => {
    axiosPostMock.mockRejectedValue(new Error('Discord API error'));

    await expect(discordService.sendMessage('Test Failure')).rejects.toThrow('Discord API error');
  });
});