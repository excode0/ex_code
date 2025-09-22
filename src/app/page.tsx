'use client';

import { Hero } from "@/components/sections";
import { useTheme } from "@/lib/theme-provider";
import { OrderForm } from "@/components/order-form";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  const { themeColors } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.background }}>
      <main>
        <Hero />

        {/* Order Form Section */}
        <OrderForm />

        {/* About Section */}
        <section
          id="about"
          className="py-20"
          style={{ backgroundColor: themeColors.surface }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                style={{ color: themeColors.foreground }}
              >
                Tentang ex_code
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: themeColors.foreground }}
              >
                Kami adalah tim pengembang dan desainer yang passionate yang percaya pada kekuatan
                teknologi untuk mentransformasi bisnis. Dengan pengalaman bertahun-tahun dalam teknologi web modern,
                kami menciptakan solusi yang tidak hanya fungsional, tetapi juga indah dan user-friendly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: themeColors.primary.red }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Cepat & Andal
                  </h3>
                  <p style={{ color: themeColors.foreground }}>
                    Performa kilat dengan jaminan uptime 99.9%
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: themeColors.primary.gold }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    Aman & Skalabel
                  </h3>
                  <p style={{ color: themeColors.foreground }}>
                    Keamanan tingkat enterprise dengan arsitektur yang dapat diskalakan
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: themeColors.primary.blue }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: themeColors.foreground }}
                  >
                    User-Centric
                  </h3>
                  <p style={{ color: themeColors.foreground }}>
                    Dirancang dengan mempertimbangkan pengguna untuk pengalaman yang luar biasa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20"
          style={{ backgroundColor: themeColors.background }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                style={{ color: themeColors.foreground }}
              >
                Layanan Kami
              </h2>
              <p
                className="text-lg mb-12"
                style={{ color: themeColors.foreground }}
              >
                Dari konsep hingga deployment, kami menyediakan solusi end-to-end yang disesuaikan dengan kebutuhan Anda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Aplikasi Mobile',
                    description: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android.',
                    icon: '📱',
                    link: '/services/mobile-app',
                  },
                  {
                    title: 'Desain UI/UX',
                    description: 'Desain yang indah dan intuitif yang memberikan pengalaman pengguna yang luar biasa.',
                    icon: '🎨',
                    link: '/services/ui-ux-design',
                  },
                  {
                    title: 'Pengembangan API',
                    description: 'Layanan backend dan API yang kuat untuk mendukung aplikasi Anda.',
                    icon: '⚡',
                    link: '/services/api-development',
                  },
                  {
                    title: 'Portofolio Website',
                    description: 'Website portofolio profesional untuk menampilkan karya dan pencapaian Anda.',
                    icon: '📂',
                    link: '/services/portfolio-website',
                  },
                  {
                    title: 'CV Digital',
                    description: 'CV online yang menarik dan profesional untuk meningkatkan peluang karir.',
                    icon: '📄',
                    link: '/services/digital-cv',
                  },
                  {
                    title: 'Undangan Digital',
                    description: 'Undangan online yang menarik dan kreatif.',
                    icon: '💌',
                    link: '/services/digital-invitation',
                  },
                  {
                    title: 'Website Custom',
                    description: 'Website custom yang disesuaikan dengan kebutuhan dan brand identity Anda.',
                    icon: '🎯',
                    link: '/services/custom-website',
                  },
                  {
                    title: 'Software Custom',
                    description: 'Software custom yang disesuaikan dengan kebutuhan dan brand identity Anda.',
                    icon: '⚙️',
                    link: '/services/custom-software',
                  }
                ].map((service, index) => (
                  <a
                    key={index}
                    href={service.link}
                    className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.border,
                    }}
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
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20"
          style={{ backgroundColor: themeColors.surface }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                style={{ color: themeColors.foreground }}
              >
                Siap Memulai Proyek Anda?
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: themeColors.foreground }}
              >
                Mari diskusikan bagaimana kami dapat membantu mewujudkan ide Anda.
                Hubungi kami hari ini untuk konsultasi gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: themeColors.primary.red }}
                >
                  Dapatkan Quote Gratis
                </button>
                <button
                  className="px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: themeColors.primary.red,
                    color: themeColors.primary.red,
                  }}
                >
                  Jadwalkan Panggilan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
