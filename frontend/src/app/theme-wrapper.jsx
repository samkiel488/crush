"use client";
import { ThemeProvider, useTheme } from "../utils/theme";

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider>
      <ThemeWrapperInner>
        {children}
      </ThemeWrapperInner>
    </ThemeProvider>
  );
}

function ThemeWrapperInner({ children }) {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {children}
    </div>
  );
}
