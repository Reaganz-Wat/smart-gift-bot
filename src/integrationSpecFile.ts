const url = 'https://f7xjdx7g-8000.eun1.devtunnels.ms/recommendation'

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
      app_description: 
        'An AI-powered assistant that recommends the perfect gift based on age, budget, and interests using OpenAI API.',
      app_logo: 'https://iili.io/Jcshqe2.md.webp',
      app_url: url,
      background_color: '#F4A300', // Bright color for a gift-related app
    },
    target_url: `${url}/webhooks`,
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
        description: 'User’s interests (e.g., gaming, technology, art)',
        default: 'gaming',
        required: true,
      },
      {
        label: 'Notification Type',
        type: 'radio',
        description: 'Preferred method of receiving the recommendation',
        options: ['Discord', 'Email'],
        default: 'Discord',
        required: true,
      },
    ],
    endpoints: [
      {
        path: '/webhook',
        method: 'POST',
        description: 'Receives the gift recommendation request and returns the AI-generated suggestions',
      },
      {
        path: '/health',
        method: 'GET',
        description: 'Health check endpoint',
      },
    ],
    is_active: true,
    author: 'Your Name',
    version: '1.0.0',
  },
}
