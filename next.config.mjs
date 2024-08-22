/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/calender",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
