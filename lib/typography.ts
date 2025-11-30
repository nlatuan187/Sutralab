/**
 * Typography System - Hệ thống Typography đồng nhất cho toàn website
 * 
 * Font Family:
 * - Primary: Inter (--font-inter) - Sử dụng cho tất cả text
 * - Special: Pacifico - Chỉ dùng cho hero section decorative text
 * 
 * Typography Scale:
 * 
 * Headings:
 * - h1: text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black
 * - h2: text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black
 * - h3: text-2xl md:text-3xl lg:text-4xl font-bold
 * - h4: text-xl md:text-2xl lg:text-3xl font-bold
 * - h5: text-lg md:text-xl lg:text-2xl font-semibold
 * - h6: text-base md:text-lg lg:text-xl font-semibold
 * 
 * Body Text:
 * - text-body-lg: text-lg md:text-xl lg:text-2xl font-medium
 * - text-body: text-base md:text-lg font-normal (default)
 * - text-body-sm: text-sm md:text-base font-normal
 * 
 * Labels/Badges:
 * - text-label: text-xs md:text-sm font-semibold uppercase tracking-wider
 * - text-label-lg: text-sm md:text-base font-bold uppercase tracking-wider
 * 
 * Usage:
 * - Sử dụng semantic HTML tags (h1, h2, h3, etc.) khi có thể
 * - Sử dụng utility classes (.text-body-lg, .text-label, etc.) cho custom elements
 * - Luôn sử dụng responsive sizes (md:, lg:, xl:)
 */

export const typography = {
  // Headings
  h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight",
  h3: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight",
  h4: "text-xl md:text-2xl lg:text-3xl font-bold leading-snug tracking-tight",
  h5: "text-lg md:text-xl lg:text-2xl font-semibold leading-snug",
  h6: "text-base md:text-lg lg:text-xl font-semibold leading-snug",
  
  // Body text
  bodyLg: "text-lg md:text-xl lg:text-2xl font-medium leading-relaxed",
  body: "text-base md:text-lg font-normal leading-relaxed",
  bodySm: "text-sm md:text-base font-normal leading-relaxed",
  
  // Labels
  label: "text-xs md:text-sm font-semibold uppercase tracking-wider",
  labelLg: "text-sm md:text-base font-bold uppercase tracking-wider",
  
  // Special cases
  heroTitle: "text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight",
  heroSubtitle: "text-lg sm:text-xl md:text-2xl font-medium leading-relaxed",
} as const

