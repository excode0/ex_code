'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function UiUxDesignPage() {
  const { themeColors } = useTheme();

  const services = [
    {
      title: 'User Research',
      description: 'Analisis mendalam tentang target audience dan kebutuhan pengguna',
      icon: '🔍',
    },
    {
      title: 'Wireframing',
      description: 'Pembuatan struktur dasar dan layout aplikasi/website',
      icon: '📐',
    },
    {
      title: 'Visual Design',
      description: 'Desain visual yang menarik dan sesuai brand identity',
      icon: '🎨',
    },
    {
      title: 'Prototyping',
      description: 'Prototype interaktif untuk testing dan presentasi',
      icon: '⚡',
    },
    {
      title: 'Usability Testing',
      description: 'Testing dengan pengguna untuk memastikan user experience optimal',
      icon: '🧪',
    },
    {
      title: 'Design System',
      description: 'Pembuatan sistem desain yang konsisten dan scalable',
      icon: '📋',
    },
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Miro', 'Notion'
  ];

  return (
    <div style={{ backgroundColor: themeColors.background }}>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-6xl font-bold mb-6"
              style={{ color: themeColors.foreground }}
            >
              Desain UI/UX
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              Desain yang indah dan intuitif yang memberikan pengalaman pengguna yang luar biasa
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
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                Layanan Desain Lengkap
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Dari research hingga implementasi, kami cover semua aspek desain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.background }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: themeColors.foreground }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: themeColors.foreground }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              style={{ color: themeColors.foreground }}
            >
              Tools & Software
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: themeColors.primary.gold + '20',
                    color: themeColors.primary.gold,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-20"
        style={{ backgroundColor: themeColors.surface }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: themeColors.foreground }}
              >
                Proses Desain
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Metodologi desain yang terbukti untuk hasil optimal
              </p>
            </div>

            <div className="space-y-8">
              {[
                { step: '1', title: 'Discovery', desc: 'Research dan analisis kebutuhan pengguna' },
                { step: '2', title: 'Design', desc: 'Wireframing, prototyping, dan visual design' },
                { step: '3', title: 'Testing', desc: 'Usability testing dan iterasi berdasarkan feedback' },
                { step: '4', title: 'Delivery', desc: 'Final assets dan design system documentation' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: themeColors.primary.red }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: themeColors.foreground }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: themeColors.foreground }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <OrderForm />
    </div>
  );
}
