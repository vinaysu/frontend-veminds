const path = require('path');

module.exports = {
    // ... your existing configuration
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            // other fallbacks if needed
        },
    },
    // ... rest of your configuration
};
