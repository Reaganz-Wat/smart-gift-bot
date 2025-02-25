# Smart Gift Recommendation Bot

The **Smart Gift Recommendation Bot** is an AI-powered Telex integration that helps users find the perfect gift based on age, budget, and interests. It uses the OpenAI API to generate gift recommendations and sends the output to a Discord channel via a webhook.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Setup](#setup)
   - [Basic Setup](#basic-setup)
   - [Discord Bot Setup](#discord-bot-setup)
   - [Environment Configuration](#environment-configuration)
5. [Testing](#testing)
6. [Usage](#usage)
7. [Security Best Practices](#security-best-practices)
8. [Monitoring and Maintenance](#monitoring-and-maintenance)
9. [Troubleshooting](#troubleshooting)
10. [Screenshots](#screenshots)
11. [Contributing](#contributing)
12. [License](#license)
13. [Support](#support)
14. [Acknowledgments](#acknowledgments)

## Overview
This integration is an **Output Integration** that routes data from a Telex channel to an external service (Discord). When a user sends a message in a Telex channel, the bot processes the input (age, budget, and interests) using the OpenAI API and sends the generated gift recommendation to a Discord channel via a webhook.

## Features
- **AI-Powered Recommendations**: Uses OpenAI's GPT model to generate personalized gift recommendations
- **Discord Integration**: Sends the output to a Discord channel using a webhook
- **Customizable Input**: Users can specify age, budget, and interests to get tailored recommendations
- **Real-Time Processing**: Processes messages in real-time and provides instant responses
- **Error Handling**: Robust error handling for invalid inputs and API failures
- **Input Validation**: Validates user input for age, budget, and interests
- **Logging**: Comprehensive logging for monitoring and debugging

## Requirements
To run this integration, you need:
- Node.js (v16 or higher)
- NestJS framework
- OpenAI API key
- Discord webhook URL
- Telex platform access
- yarn package manager

## Setup

### Basic Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Reaganz-Wat/smart-gift-bot.git
   cd smart-gift-bot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

### Joining the Discord Server

To start receiving gift recommendations, simply join our Discord server using the link below:

[Join Smart Gift Bot Discord Server](https://discord.gg/5AHNNAYc)

#### What to Expect After Joining:
1. You'll have immediate access to the gift recommendations channel
2. All recommendations will appear in real-time
3. You can interact with other community members
4. Get notifications for new gift suggestions

### How to Join the Smart Gift Bot Discord Server:
1. Click on the invite link: [Join Smart Gift Bot Discord Server](https://discord.gg/5AHNNAYc)
2. If you don’t have a Discord account, sign up and log in.
3. After logging in, you will see a prompt to join the server.
4. Click **Join Server** to become a member.
5. If you don’t see the prompt, follow these steps manually:
   - Open your Discord application.
   - Click on the **+** button on the left sidebar to **Create or Join a Server**.
   - Select **Join a Server**.
   - Paste the invite link (**https://discord.gg/5AHNNAYc**) into the input box.
   - Click **Join** to access the Smart Gift Bot community.

Now you’re all set! You will receive real-time gift recommendations and can interact with other community members.

Note: The invite link is permanent and can be shared with others who might find the gift recommendations useful.



### Environment Configuration
1. Create a `.env` file in the root directory
2. Add the following configuration:
   ```env
   # OpenAI Configuration
   API_KEY=your_openai_api_key

   # Discord Configuration
   DISCORD_URL=your_discord_webhook_url

   # Server Configuration
   PORT=8000
   ```

3. **Build the Application**:
   ```bash
   npm run build
   # or using yarn
   yarn build
   ```

4. **Start the Server**:
   ```bash
   npm run start
   # or using yarn
   yarn start
   ```

## Testing
1. **Run the Test Suite**:
   ```bash
   # unit tests
   yarn run test

   # e2e tests
   yarn run test:e2e

   # test coverage
   yarn test:cov
   ```

2. **Test Webhook Integration**:
   ```bash
   curl -X POST -H "Content-Type: application/json" \
   -d '{"content": "My age is 5, I like reading books and my budget is $30"}' \
   https://smart-gift-bot.onrender.com/recommendation/webhooks
   ```

## Usage
1. **Message Format**:
   ```json
   {
     "age": 25,
     "budget": 100,
     "interests": "gaming, technology, outdoor activities"
   }
   ```

2. **API Endpoints**:
   - GET `/recommendation/integration-specs`: Gets the integrations specs settings
   - POST `/recommendation/webhooks`: Sending gift recommendations messages to openai

## Screenshots
### Telex prompts
![Telex Prompt](./src/assets/telex%20gift%20prompt.png)
*Telex prompts*

### Discord channel responses
![Discord Response](./src/assets/discord%20git%20bot.png)
*Discord channel response with gift recommendations*

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Run tests (`yarn run test`)
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

### Code Style
- Follow the NestJS style guide
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support
For support, please:
- Open an issue on GitHub
- Contact the Telex support team
- Check the [documentation](docs/README.md)
- Join our [Discord community](https://discord.gg/your-community)

### Additional Resources
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [Discord Webhooks Guide](https://discord.com/developers/docs/resources/webhook)
- [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service)
- [Discord Rate Limits](https://discord.com/developers/docs/topics/rate-limits)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [NestJS Documentation](https://docs.nestjs.com/)

## Acknowledgments
- OpenAI for providing the GPT API
- Discord for webhook integration
- Telex platform team for the integration framework
- All contributors who have helped improve this project

---
Made with ❤️ by Reagan Wat