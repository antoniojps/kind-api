const configObj = {
  development: {
    PORT: 3000,
    TEXT_ANALYTICS_API_KEY: 'xxx',
    INSULT_API_KEY: 'xxx',
  },
  production: {
    PORT: 3000,
    TEXT_ANALYTICS_API_KEY: 'xxx',
    INSULT_API_KEY: 'xxx',
  },
}

const env = process.env.NODE_ENV || 'production'
if (env === 'development' || env === 'production') {
  const config = configObj[env]
  Object.keys(config).forEach(key => {
    process.env[key] = config[key]
  })
}
