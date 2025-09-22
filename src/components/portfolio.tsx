'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';

export function Portfolio() {
  const { themeColors } = useTheme();

  const completedProjects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'Website Custom',
      description: 'Platform e-commerce modern dengan sistem pembayaran terintegrasi dan manajemen inventori.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      status: 'Selesai',
      client: 'PT Fashion Indonesia',
      duration: '3 bulan',
      image: '🛍️',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Aplikasi Mobile',
      description: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan analisis keuangan.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      status: 'Selesai',
      client: 'Bank Digital Indonesia',
      duration: '4 bulan',
      image: '🏦',
    },
    {
      id: 3,
      title: 'Portfolio Website Designer',
      category: 'Website Portofolio',
      description: 'Website portofolio untuk desainer grafis dengan galeri interaktif dan sistem booking.',
      tech: ['React', 'Framer Motion', 'Vercel', 'Sanity CMS'],
      status: 'Selesai',
      client: 'Studio Design Creative',
      duration: '2 minggu',
      image: '🎨',
    },
    {
      id: 4,
      title: 'CV Digital Interactive',
      category: 'CV Digital',
      description: 'CV online interaktif dengan animasi dan integrasi LinkedIn untuk professional.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      status: 'Selesai',
      client: 'John Developer',
      duration: '1 minggu',
      image: '📄',
    },
    {
      id: 5,
      title: 'Wedding Invitation Digital',
      category: 'Undangan Digital',
      description: 'Undangan pernikahan digital dengan RSVP system dan galeri foto interaktif.',
      tech: ['Vue.js', 'Firebase', 'EmailJS', 'Cloudinary'],
      status: 'Selesai',
      client: 'Happy Wedding Planner',
      duration: '3 minggu',
      image: '💒',
    },
    {
      id: 6,
      title: 'HR Management System',
      category: 'Software Custom',
      description: 'Sistem manajemen SDM dengan fitur absensi, payroll, dan performance tracking.',
      tech: ['Laravel', 'MySQL', 'React', 'Docker'],
      status: 'Selesai',
      client: 'PT Human Resource Corp',
      duration: '5 bulan',
      image: '👥',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai':
        return themeColors.primary.gold || '#10B981';
      case 'Dalam Proses':
        return themeColors.primary.gold || '#F59E0B';
      case 'Pending':
        return themeColors.primary.red || '#EF4444';
      default:
        return themeColors.neutral.gray[500] || '#6B7280';
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: themeColors.foreground }}
            >
              Portofolio Proyek
            </h2>
            <p
              className="text-lg"
              style={{ color: themeColors.foreground }}
            >
              Berikut adalah beberapa proyek yang telah berhasil kami selesaikan untuk klien kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: themeColors.surface }}
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.primary.red}20, ${themeColors.primary.gold}20)`
                  }}
                >
                  <span className="text-6xl">{project.image}</span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: themeColors.foreground }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: getStatusColor(project.status),
                        color: 'white',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p
                    className="text-sm mb-4"
                    style={{ color: themeColors.foreground }}
                  >
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{
                        backgroundColor: themeColors.primary.red + '20',
                        color: themeColors.primary.red,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span style={{ color: themeColors.neutral.gray[500] }}>Klien:</span>
                      <span style={{ color: themeColors.foreground }}>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: themeColors.neutral.gray[500] }}>Durasi:</span>
                      <span style={{ color: themeColors.foreground }}>{project.duration}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p
                      className="text-xs font-medium mb-2"
                      style={{ color: themeColors.neutral.gray[500] }}
                    >
                      Teknologi:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded text-xs"
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
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p
              className="text-lg mb-6"
              style={{ color: themeColors.foreground }}
            >
              Ingin proyek Anda menjadi bagian dari portofolio kami selanjutnya?
            </p>
            <button
              className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: themeColors.primary.red }}
            >
              Mulai Proyek Baru
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
