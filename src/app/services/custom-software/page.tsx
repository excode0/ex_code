'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';
import { OrderForm } from '@/components/order-form';

export default function CustomSoftwarePage() {
  const { themeColors } = useTheme();

  const softwareTypes = [
    {
      title: 'Business Management System',
      description: 'Sistem manajemen bisnis terintegrasi',
      icon: '📊',
    },
    {
      title: 'CRM System',
      description: 'Customer Relationship Management custom',
      icon: '👥',
    },
    {
      title: 'Inventory Management',
      description: 'Sistem manajemen inventori dan stock',
      icon: '📦',
    },
    {
      title: 'HR Management System',
      description: 'Sistem manajemen SDM dan payroll',
      icon: '👨‍💼',
    },
    {
      title: 'Project Management Tool',
      description: 'Tool manajemen project dan collaboration',
      icon: '📋',
    },
    {
      title: 'Custom ERP Solution',
      description: 'Enterprise Resource Planning custom',
      icon: '🏗️',
    },
  ];

  const features = [
    'Scalable Architecture',
    'Database Design',
    'API Integration',
    'Security Implementation',
    'Performance Optimization',
    'User Management',
    'Reporting & Analytics',
    'Mobile Compatibility',
  ];

  const technologies = [
    'Python', 'Java', 'C#', '.NET', 'Node.js', 'PHP', 'Laravel', 'Django', 'Spring Boot', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure'
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
              Software Custom
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: themeColors.foreground }}
            >
              Software custom yang disesuaikan dengan kebutuhan dan brand identity Anda
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
                Konsultasi Teknis
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
                Jenis Software
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Berbagai solusi software custom untuk berbagai kebutuhan bisnis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareTypes.map((type, index) => (
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
                Fitur Software
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Fitur-fitur enterprise-grade untuk software yang powerful
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: themeColors.surface }}
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: themeColors.foreground }}
              >
                Proses Development
              </h2>
              <p
                className="text-lg"
                style={{ color: themeColors.foreground }}
              >
                Metodologi software development lifecycle yang terbukti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {[
                { step: '1', title: 'Analysis', desc: 'Requirement gathering dan analysis' },
                { step: '2', title: 'Design', desc: 'System design dan architecture' },
                { step: '3', title: 'Development', desc: 'Implementation dan coding' },
                { step: '4', title: 'Testing', desc: 'Unit, integration, dan UAT' },
                { step: '5', title: 'Deploy', desc: 'Deployment dan go-live' },
                { step: '6', title: 'Support', desc: 'Maintenance dan support' },
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
