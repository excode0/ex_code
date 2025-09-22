"use client";

import { Footer, Header } from "@/components/layout";
import { ThemeProviderWrapper } from "@/lib/theme-provider-wrapper";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper>
      <Header />
      {children}
      <Footer />
    </ThemeProviderWrapper>
  );
}
