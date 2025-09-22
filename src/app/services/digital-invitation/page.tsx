'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function DigitalInvitationPage() {
  const { themeColors } = useTheme();

  const invitationTypes = [
    {
      title: 'Wedding Invitation',
      description: 'Undangan pernikahan yang elegan dan personal',
      icon: '💒',
    },
    {
      title: 'Birthday Party',
      description: 'Undangan ulang tahun yang menyenangkan dan colorful',
      icon: '🎂',
    },
    {
      title: 'Corporate Event',
      description: 'Undangan event perusahaan yang profesional',
      icon: '🏢',
    },
    {
      title: 'Graduation Party',
      description: 'Undangan wisuda yang memorable',
      icon: '🎓',
    },
    {
      title: 'Baby Shower',
      description: 'Undangan baby shower yang cute dan warm',
      icon: '👶',
    },
    {
      title: 'Custom Event',
      description: 'Undangan custom untuk event khusus Anda',
      icon: '🎉',
    },
  ];

  const features = [
    'Interactive RSVP System',
    'Photo Gallery Integration',
    'Music & Animation',
    'Guest List Management',
    'Save the Date Feature',
    'Multi-language Support',
    'Social Media Sharing',
    'QR Code Generation',
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
              Undangan Digital
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              Undangan online yang menarik dan kreatif untuk berbagai acara spesial
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
                Jenis Undangan
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Berbagai pilihan template untuk berbagai acara spesial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {invitationTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.background }}
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: themeColors.foreground }}
                  >
                    {type.title}
                  </h3>
                  <p style={{ color: themeColors.foreground }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: themeColors.foreground }}
              >
                Fitur Lengkap
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Semua yang Anda butuhkan untuk undangan digital yang sempurna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <div className="text-3xl mb-4">✨</div>
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
                { step: '1', title: 'Konsep', desc: 'Diskusi tema dan style undangan' },
                { step: '2', title: 'Desain', desc: 'Pembuatan mockup dan animasi' },
                { step: '3', title: 'Konten', desc: 'Input data dan personalisasi' },
                { step: '4', title: 'Deploy', desc: 'Deploy dan testing final' },
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
