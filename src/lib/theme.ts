export type Theme = 'light' | 'dark';

export const themeColors = {
  // Primary brand colors
  primary: {
    red: '#DC2626',
    gold: '#F59E0B',
    blue: '#2563EB',
  },

  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
  },

  // Theme-specific backgrounds
  background: {
    light: '#FFFFFF',
    dark: '#0F172A',
  },

  // Theme-specific foregrounds
  foreground: {
    light: '#0F172A',
    dark: '#F8FAFC',
  },
} as const;

export type ThemeColors = {
  background: string;
  foreground: string;
  primary: typeof themeColors.primary;
  neutral: typeof themeColors.neutral;
  surface: string;
  surfaceSecondary: string;
  border: string;
  borderSecondary: string;
};

export const lightTheme: ThemeColors = {
  background: themeColors.background.light,
  foreground: themeColors.foreground.light,
  primary: themeColors.primary,
  neutral: themeColors.neutral,
  surface: themeColors.neutral.gray[50],
  surfaceSecondary: themeColors.neutral.gray[100],
  border: themeColors.neutral.gray[200],
  borderSecondary: themeColors.neutral.gray[300],
};

export const darkTheme: ThemeColors = {
  background: themeColors.background.dark,
  foreground: themeColors.foreground.dark,
  primary: themeColors.primary,
  neutral: themeColors.neutral,
  surface: themeColors.neutral.gray[800],
  surfaceSecondary: themeColors.neutral.gray[700],
  border: themeColors.neutral.gray[700],
  borderSecondary: themeColors.neutral.gray[600],
};
