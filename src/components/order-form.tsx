'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/theme-provider';

export function OrderForm() {
  const { themeColors } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Kami akan menghubungi Anda dalam 24 jam.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: themeColors.surface }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: themeColors.foreground }}
            >
              Pesan Jasa Sekarang
            </h2>
            <p
              className="text-lg"
              style={{ color: themeColors.foreground }}
            >
              Isi formulir di bawah ini dan kami akan menghubungi Anda untuk diskusi lebih lanjut
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            style={{ backgroundColor: themeColors.background }}
          >
            <div className="p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                    placeholder="alamat@email.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                    placeholder="+62 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Jasa yang Diinginkan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                  >
                    <option value="">Pilih jasa...</option>
                    <option value="mobile-app">Aplikasi Mobile</option>
                    <option value="ui-ux-design">Desain UI/UX</option>
                    <option value="api-development">Pengembangan API</option>
                    <option value="portfolio-website">Website Portofolio</option>
                    <option value="digital-cv">CV Digital</option>
                    <option value="digital-invitation">Undangan Digital</option>
                    <option value="custom-website">Website Custom</option>
                    <option value="custom-software">Software Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Budget Estimasi
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                  >
                    <option value="">Pilih budget...</option>
                    <option value="under-5m">Di bawah 5 juta</option>
                    <option value="5m-10m">5 - 10 juta</option>
                    <option value="10m-25m">10 - 25 juta</option>
                    <option value="25m-50m">25 - 50 juta</option>
                    <option value="above-50m">Di atas 50 juta</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Timeline yang Diinginkan
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                      color: themeColors.foreground,
                    }}
                  >
                    <option value="">Pilih timeline...</option>
                    <option value="1-week">1 minggu</option>
                    <option value="2-weeks">2 minggu</option>
                    <option value="1-month">1 bulan</option>
                    <option value="2-months">2 bulan</option>
                    <option value="3-months">3 bulan</option>
                    <option value="flexible">Fleksibel</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeColors.foreground }}
                >
                  Deskripsi Proyek *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.border,
                    color: themeColors.foreground,
                  }}
                  placeholder="Jelaskan detail proyek Anda, fitur yang diinginkan, target audience, dll."
                />
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: themeColors.primary.red }}
                >
                  Kirim Permintaan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
