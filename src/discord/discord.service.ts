import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { EmbedBuilder } from 'discord.js';

@Injectable()
export class DiscordService {
  private readonly webhookUrl = process.env.DISCORD_URL as string;

  async sendMessage(content: string, embed?: EmbedBuilder) {
    try {
      const payload = {
        content,
        embeds: embed ? [embed.toJSON()] : [],
      };

      const response = await axios.post(this.webhookUrl, payload);
      console.log("Sent to discord 👍👍👍👍")
      return response.data;
    } catch (error) {
      console.error('Error sending message to Discord:', error);
      throw error;
    }
  }
}
