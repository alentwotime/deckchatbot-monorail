 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

 codex/clean-up-project-and-verify-routing
require('dotenv').config();

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
 main
 main

const config = {
  // Server configuration
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database
  MEM_DB: process.env.MEM_DB || '',
  
  // API Keys
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  API_KEY: process.env.API_KEY || 'revamp123secure',
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
  PYTHON_API_URL: process.env.PYTHON_API_URL || 'http://localhost:8000',

 main
 main
  
  // Security
  JWT_SECRET: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
  
  // Rate Limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX: 100, // requests per window
  
  // File Upload
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  
  // Logging
  USE_LOG_EMOJI: process.env.NODE_ENV !== 'production',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  
  // OpenAI
  OPENAI_MODEL: 'gpt-3.5-turbo',
  OPENAI_MAX_TOKENS: 1000,
  OPENAI_TEMPERATURE: 0.7,
  
  // Development
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

// Validation
if (!config.OPENAI_API_KEY) {
  console.warn('⚠️  Warning: OPENAI_API_KEY not set. AI features will not work.');
}

if (config.NODE_ENV === 'production' && config.API_KEY === 'revamp123secure') {
  console.warn('⚠️  Warning: Using default API_KEY in production. Please set a secure API_KEY.');
}

 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
module.exports = config;

 codex/clean-up-project-and-verify-routing
module.exports = config;

module.exports = config;
 main
 main
