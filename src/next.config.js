// next.config.js
module.exports = {
  reactStrictMode: true,
  
  // Yeh images.unsplash.com ke liye configuration hai
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Agar aur external images use karoge to yahan add karo
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
  
  // Optional: Production mein console logs hide karega
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};