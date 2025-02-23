# Smart Gift Recommendation Bot

The **Smart Gift Recommendation Bot** is an AI-powered Telex integration that helps users find the perfect gift based on age, budget, and interests. It uses the OpenAI API to generate gift recommendations and sends the output to a Discord channel via a webhook.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Setup](#setup)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Usage](#usage)
8. [Screenshots](#screenshots)
9. [Contributing](#contributing)
10. [License](#license)

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
Follow these steps to set up the Smart Gift Recommendation Bot:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/telex_integrations/smart-gift-recommendation-bot.git
   cd smart-gift-recommendation-bot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   # OpenAI Configuration
   API_KEY=your_openai_api_key

   # Discord Configuration
   DISCORD_URL=your_discord_webhook_url

   # Server Configuration
   PORT=8000

   ```

4. **Build the Application**:
   ```bash
   npm run build
   # or using yarn
   yarn build
   ```

5. **Start the Server**:
   ```bash
   npm run start
   # or using yarn
   yarn start
   ```

## Testing
Ensure your application works correctly by running the test suite:

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn test:cov
```

## Deployment
1. **Prepare for Production**:
   - Update environment variables for production
   - Build the application using `yarn run build`
   - Ensure all dependencies are properly listed in `package.json`

2. **Deploy to Your Server**:
   - Choose a hosting platform (e.g., Heroku, AWS, DigitalOcean)
   - Set up environment variables on your hosting platform
   - Configure your domain and SSL certificate
   - Set up monitoring and logging

3. **Continuous Integration**:
   - Set up GitHub Actions for automated testing
   - Configure deployment pipelines
   - Set up monitoring alerts

## Usage
1. **Send a Message Format**:
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
![Telex Prompt](./src/assets/telex%20gift%20prompt.png)
![Discord Response](./src/assets/discord%20git%20bot.png)
*Screenshots for Telext prompts and gift bot response on discord channel using webhook*

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

## Acknowledgments
- OpenAI for providing the GPT API
- Discord for webhook integration
- Telex platform team for the integration framework

---
Made with ❤️ by Your Reagan Wat