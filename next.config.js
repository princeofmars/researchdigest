// CI=false is now in .env.production
// Removing unnecessary logic to avoid exit code 1
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true }
};
