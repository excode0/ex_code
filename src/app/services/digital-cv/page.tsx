'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function DigitalCvPage() {
  const { themeColors } = useTheme();

  const features = [
    'Interactive Design',
    'LinkedIn Integration',
    'Downloadable PDF Version',
    'Contact Forms',
    'Skills Visualization',
    'Project Showcase',
    'Testimonials Section',
    'SEO Optimized',
  ];

  const benefits = [
    'Stand out from traditional CVs',
    'Showcase your personality',
    'Easy to share and access',
    'Professional presentation',
    'Mobile-friendly design',
    'Analytics and tracking',
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
              CV Digital
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              CV online yang menarik dan profesional untuk meningkatkan peluang karir
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
                Lihat Contoh
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
                Fitur CV Digital
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Buat kesan pertama yang tak terlupakan dengan CV digital interaktif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.background }}
                >
                  <div className="text-3xl mb-4">📄</div>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: themeColors.foreground }}
              >
                Mengapa CV Digital?
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Keunggulan CV digital dibandingkan CV tradisional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <div className="text-4xl mb-4">✨</div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: themeColors.foreground }}
                  >
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: themeColors.surface }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              style={{ color: themeColors.foreground }}
            >
              Proses Pembuatan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Konsultasi', desc: 'Diskusi tentang karir dan pencapaian Anda' },
                { step: '2', title: 'Desain', desc: 'Pembuatan mockup dan prototype CV' },
                { step: '3', title: 'Development', desc: 'Pengembangan CV digital interaktif' },
                { step: '4', title: 'Deploy', desc: 'Deploy dan optimasi SEO' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                    style={{ backgroundColor: themeColors.primary.red }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: themeColors.foreground }}
                  >
                    {item.desc}
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
