'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';

export function Hero() {
  const { themeColors } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            style={{ color: themeColors.foreground }}
          >
            <span style={{ color: themeColors.primary.red }}>ex_</span>code
          </h1>
          <p
            className="text-xl mb-8"
            style={{ color: themeColors.foreground }}
          >
            Jasa Pengembangan Software Profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-medium text-white transition-colors hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: themeColors.primary.red }}
            >
              Mulai Sekarang
            </button>
            <button
              className="px-8 py-3 rounded-lg font-medium transition-colors hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: 'transparent',
                borderColor: themeColors.primary.red,
                color: themeColors.primary.red,
              }}
            >
              Lihat Portofolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
