/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/calendar',
        destination:
          'https://outlook.office365.com/owa/calendar/2011ea4cbe914f4989a4a2cd8137b3ad@stanford.edu/ad3b3b4b964845ce8c92468b22e8d9cf11025465218546310803/calendar.html',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
