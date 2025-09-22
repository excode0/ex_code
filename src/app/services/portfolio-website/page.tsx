'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function PortfolioWebsitePage() {
  const { themeColors } = useTheme();

  const features = [
    'Responsive Design',
    'Interactive Portfolio Gallery',
    'Contact Forms',
    'SEO Optimization',
    'Social Media Integration',
    'Blog Section',
    'Testimonials',
    'Analytics Integration',
  ];

  const templates = [
    'Creative Portfolio', 'Photography Portfolio', 'Design Portfolio', 'Developer Portfolio', 'Artist Portfolio', 'Agency Portfolio'
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
              Website Portofolio
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              Website portofolio profesional untuk menampilkan karya dan pencapaian Anda
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
                Lihat Template
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
                Fitur Portofolio
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Semua yang Anda butuhkan untuk memamerkan karya terbaik Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.background }}
                >
                  <div className="text-3xl mb-4">📂</div>
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
              Template Portofolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    {template}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: themeColors.foreground }}
                  >
                    Template khusus untuk {template.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OrderForm />
    </div>
  );
}
