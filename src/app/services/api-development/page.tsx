'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function ApiDevelopmentPage() {
  const { themeColors } = useTheme();

  const features = [
    'RESTful API Development',
    'GraphQL Implementation',
    'Database Design & Optimization',
    'Authentication & Authorization',
    'API Documentation',
    'Testing & Monitoring',
    'Scalable Architecture',
    'Microservices Setup',
  ];

  const technologies = [
    'Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'GraphQL', 'JWT'
  ];

  return (
    <div style={{ backgroundColor: themeColors.background }}>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-6xl font-bold mb-6"
              style={{ color: themeColors.foreground }}
            >
              Pengembangan API
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              Layanan backend dan API yang kuat untuk mendukung aplikasi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: themeColors.primary.red }}
              >
                Mulai Proyek
              </button>
              <button
                className="px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: themeColors.primary.red,
                  color: themeColors.primary.red,
                }}
              >
                Lihat Dokumentasi
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: themeColors.surface }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: themeColors.foreground }}
              >
                Fitur Backend Lengkap
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Arsitektur backend yang scalable dan maintainable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.background }}
                >
                  <div className="text-3xl mb-4">⚡</div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              style={{ color: themeColors.foreground }}
            >
              Stack Teknologi
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: themeColors.primary.gold + '20',
                    color: themeColors.primary.gold,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OrderForm />
    </div>
  );
}
