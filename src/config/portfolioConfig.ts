/**
 * Portfolio Configuration
 *
 * This file contains easy-to-modify settings for your academic portfolio.
 * You can quickly enable/disable features, change themes, and configure
 * display preferences without touching the component code.
 */

export interface PortfolioConfig {
  // Display preferences
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
  };

  // Feature toggles
  features: {
    showProfileImage: boolean;
    showPublicationTypes: boolean;
    groupPublicationsByYear: boolean;
    showDownloadCV: boolean;
    enableDarkMode: boolean;
    showSocialLinks: boolean;
  };

  // Section ordering and visibility
  sectionConfig: {
    [key: string]: {
      enabled: boolean;
      order: number;
      title?: string; // Override default title
    };
  };

  // Display formatting
  format: {
    dateFormat: "full" | "year-only" | "month-year";
    nameDisplay: "full" | "no-title" | "initials";
    publicationSorting: "year-desc" | "year-asc" | "alphabetical";
  };
}

export const portfolioConfig: PortfolioConfig = {
  theme: {
    primaryColor: "#2c3e50",
    secondaryColor: "#3498db",
    accentColor: "#e74c3c",
    backgroundColor: "#fafafa",
  },

  features: {
    showProfileImage: false,
    showPublicationTypes: true,
    groupPublicationsByYear: false,
    showDownloadCV: false,
    enableDarkMode: false,
    showSocialLinks: true,
  },

  sectionConfig: {
    about: { enabled: true, order: 1 },
    education: { enabled: true, order: 2 },
    research: { enabled: true, order: 3, title: "Research Interests" },
    publications: { enabled: true, order: 4 },
    awards: { enabled: true, order: 5, title: "Awards & Honors" },
    contact: { enabled: true, order: 6 },
  },

  format: {
    dateFormat: "full",
    nameDisplay: "no-title",
    publicationSorting: "year-desc",
  },
};

// Utility functions for configuration
export const configUtils = {
  // Get enabled sections in order
  getEnabledSections: () =>
    Object.entries(portfolioConfig.sectionConfig)
      .filter(([, config]) => config.enabled)
      .sort(([, a], [, b]) => a.order - b.order),

  // Check if a feature is enabled
  isFeatureEnabled: (feature: keyof PortfolioConfig["features"]) =>
    portfolioConfig.features[feature],

  // Get theme colors
  getThemeColors: () => portfolioConfig.theme,
};
