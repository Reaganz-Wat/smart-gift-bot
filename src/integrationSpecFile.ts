const url = 'https://smart-gift-bot.onrender.com/recommendation';

export const smartGiftBotConfig = {
  data: {
    date: {
      created_at: '2025-02-20',
      updated_at: '2025-02-21',
    },
    integration_category: 'AI & Machine Learning',
    integration_type: 'output',
    descriptions: {
      app_name: 'Smart Gift Bot',
      app_description: 'An AI-powered assistant that recommends the perfect gift based on age, budget, and interests using OpenAI API.',
      app_logo: 'https://iili.io/Jcshqe2.md.webp',
      app_url: url,
      background_color: '#F4A300',
    },
    target_url: `${url}/webhooks`,
    // Add output configuration to specify channels
    output: [
      {
        label: "general",
        value: true
      },
      {
        label: "other_channels",
        value: false
      }
    ],
    key_features: [
      'Personalized gift recommendations based on age, budget, and interests',
      'AI-driven suggestions powered by OpenAI API',
      'Customizable fields for user preferences',
      'Instant recommendations sent to your preferred platform (Discord, Email, etc.)',
    ],
    settings: [
      {
        label: 'Age',
        type: 'number',
        description: 'Age of the recipient',
        default: 25,
        required: true,
      },
      {
        label: 'Budget',
        type: 'number',
        description: 'Maximum budget for the gift',
        default: 50,
        required: true,
      },
      {
        label: 'Interests',
        type: 'text',
        description: 'Users interests (e.g., gaming, technology, art)',
        default: 'gaming',
        required: true,
      },
      {
        label: 'Notification Type',
        type: 'dropdown', // Changed from radio to dropdown as per spec
        description: 'Preferred method of receiving the recommendation',
        options: ['Discord', 'Email'],
        default: 'Discord',
        required: true,
      }
    ],
    endpoints: [
      {
        path: '/webhooks',
        method: 'POST',
        description: 'Used to send the messages from Telex channel',
      },
      {
        path: '/integration-specs',
        method: 'GET',
        description: 'Gets integration settings',
      }
    ],
    is_active: true,
    tick_url: '',
    author: 'Reagan Watmon',
    version: '1.0.0',
  },
}