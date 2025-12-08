
import path from 'path';
const emailsDirRelativePath = path.normalize('./emails');
const userProjectLocation = '/Users/yongmin/Downloads/_monthlystartup/shadergradient-3/apps/email-previews';
const previewServerLocation = '/Users/yongmin/Downloads/_monthlystartup/shadergradient-3/apps/email-previews/.react-email';
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_IS_BUILDING: 'true',
    EMAILS_DIR_RELATIVE_PATH: emailsDirRelativePath,
    EMAILS_DIR_ABSOLUTE_PATH: path.resolve(userProjectLocation, emailsDirRelativePath),
    PREVIEW_SERVER_LOCATION: previewServerLocation,
    USER_PROJECT_LOCATION: userProjectLocation
  },
  outputFileTracingRoot: previewServerLocation,
  serverExternalPackages: ['esbuild'],
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    webpackBuildWorker: true
  },
}

export default nextConfig