import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Formatos modernos para mejor compresión
    formats: ["image/avif", "image/webp"],
    // Tamaños de dispositivo para optimización responsiva
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // TTL mínimo para caché (60 segundos)
    minimumCacheTTL: 60,
  },
};

export default withNextIntl(nextConfig);
