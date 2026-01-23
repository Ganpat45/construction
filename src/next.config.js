// Next.js config mein add karo
// next.config.js
module.exports = {
  reactStrictMode: true,
  // Yeh warning suppress karega but fix nahi karega
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};