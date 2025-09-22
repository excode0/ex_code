'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme-provider';
import { Button, ThemeToggle } from '@/components/ui';

export function Header() {
  const { themeColors, isLoaded } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesDropdownOpen(false);
    };

    if (isServicesDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isServicesDropdownOpen]);

  const mainNavigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/#about' },
    { name: 'Kontak', href: '/#contact' },
  ];

  const services = [
    { name: 'Aplikasi Mobile', href: '/services/mobile-app', icon: '📱' },
    { name: 'Desain UI/UX', href: '/services/ui-ux-design', icon: '🎨' },
    { name: 'Pengembangan API', href: '/services/api-development', icon: '⚡' },
    { name: 'Website Portofolio', href: '/services/portfolio-website', icon: '📂' },
    { name: 'CV Digital', href: '/services/digital-cv', icon: '📄' },
    { name: 'Undangan Digital', href: '/services/digital-invitation', icon: '💌' },
    { name: 'Website Custom', href: '/services/custom-website', icon: '🎯' },
    { name: 'Software Custom', href: '/services/custom-software', icon: '⚙️' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent flash during hydration
  if (!isLoaded) {
    return (
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-white border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2 text-2xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                  ex_
                </span>
                <span className="text-gray-900">code</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-sm"
      style={{
        backgroundColor: `${themeColors.background}E6`, // Add transparency
        borderColor: themeColors.border,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold transition-colors hover:opacity-80"
              style={{ color: themeColors.primary.red }}
            >
              <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                ex_
              </span>
              <span style={{ color: themeColors.foreground }}>code</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-all duration-200 hover:text-red-600 relative group"
                style={{ color: themeColors.foreground }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                }}
                className="text-sm font-medium transition-all duration-200 hover:text-red-600 relative group flex items-center space-x-1"
                style={{ color: themeColors.foreground }}
              >
                <span>Layanan</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 rounded-lg shadow-lg border py-2 z-50"
                  style={{
                    backgroundColor: themeColors.background,
                    borderColor: themeColors.border,
                  }}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                        style={{ color: themeColors.foreground }}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Mulai Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors"
              style={{
                color: themeColors.foreground,
              }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div
            className="px-2 pt-2 pb-3 space-y-1 border-t"
            style={{ borderColor: themeColors.border }}
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                style={{ color: themeColors.foreground }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-sm font-semibold mb-2" style={{ color: themeColors.foreground }}>
                Layanan Kami
              </div>
              <div className="space-y-1 ml-4">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                    style={{ color: themeColors.foreground }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-3 py-2">
              <Button variant="outline" size="sm" className="w-full">
                Mulai Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
