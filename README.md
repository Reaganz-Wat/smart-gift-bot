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

---

## Overview
This integration is an **Output Integration** that routes data from a Telex channel to an external service (Discord). When a user sends a message in a Telex channel, the bot processes the input (age, budget, and interests) using the OpenAI API and sends the generated gift recommendation to a Discord channel via a webhook.

---

## Features
- **AI-Powered Recommendations**: Uses OpenAI's GPT model to generate personalized gift recommendations.
- **Discord Integration**: Sends the output to a Discord channel using a webhook.
- **Customizable Input**: Users can specify age, budget, and interests to get tailored recommendations.
- **Real-Time Processing**: Processes messages in real-time and provides instant responses.

---

## Requirements
To run this integration, you need the following:
- Node.js (v16 or higher)
- NestJS framework
- OpenAI API key
- Discord webhook URL
- Telex platform access

---

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
   ```

3. **Configure Environment Variables**:
   Create a `.env` file and add the following:
   ```env
   API_KEY=your-openai-api-key
   DISCORD_URL=your-discord-webhook-url
   PORT=your-port
   ```

4. **Run the Application**:
   ```bash
   yarn run start
   ```

---

## Testing
- Test locally using `Postman` or `curl` to send Telex messages and verify responses in the Discord channel.
- Ensure error handling works properly for invalid inputs.

---

## Deployment
- Host your JSON file on a publicly accessible URL.
- Deploy your integration to one of the designated Test Telex Organisations for testing.
- Ensure the integration is installed and enabled in the designated test organisation.

---

## Usage
1. Send a message in a Telex channel with details (age, budget, interests).
2. The bot processes the message using OpenAI.
3. The recommended gift appears in the designated Discord channel.

---

## Screenshots
Add screenshots of the bot in action, showing Telex input and Discord output.

---

## Contributing
Contributions are welcome! Fork the repo, create a new branch, and submit a pull request.

---

## License
This project is licensed under the MIT License.
