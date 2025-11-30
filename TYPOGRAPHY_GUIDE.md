# Typography System Guide - Hệ thống Typography đồng nhất

## Font Family

**Primary Font:** Inter (`--font-inter`)
- Sử dụng cho tất cả text trên website
- Được load từ Google Fonts trong `app/layout.tsx`

**Special Font:** Pacifico
- Chỉ sử dụng cho decorative text trong hero section ("AI Cho Doanh Nghiệp")
- Không sử dụng ở nơi khác

## Typography Scale

### Headings

| Element | Mobile | Tablet | Desktop | XL | Font Weight | Usage |
|---------|--------|--------|---------|----|-------------|-------|
| h1 | text-4xl | text-5xl | text-6xl | text-7xl | font-black | Main page titles |
| h2 | text-3xl | text-4xl | text-5xl | text-6xl | font-black | Section titles |
| h3 | text-2xl | text-3xl | text-4xl | - | font-bold | Subsection titles |
| h4 | text-xl | text-2xl | text-3xl | - | font-bold | Card titles |
| h5 | text-lg | text-xl | text-2xl | - | font-semibold | Small headings |
| h6 | text-base | text-lg | text-xl | - | font-semibold | Labels |

### Body Text

| Class | Mobile | Tablet/Desktop | Font Weight | Usage |
|-------|--------|----------------|-------------|-------|
| .text-body-lg | text-lg | text-xl lg:text-2xl | font-medium | Large body text, hero subtitles |
| .text-body | text-base | text-lg | font-normal | Default body text |
| .text-body-sm | text-sm | text-base | font-normal | Small body text, descriptions |

### Labels & Badges

| Class | Mobile | Tablet/Desktop | Font Weight | Usage |
|-------|--------|----------------|-------------|-------|
| .text-label | text-xs | text-sm | font-semibold uppercase | Small labels, badges |
| .text-label-lg | text-sm | text-base | font-bold uppercase | Large labels, section badges |

## Usage Guidelines

### 1. Sử dụng Semantic HTML
```tsx
// ✅ Good
<h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
  Section Title
</h2>

// ❌ Bad
<div className="text-3xl md:text-4xl lg:text-5xl font-black">
  Section Title
</div>
```

### 2. Responsive Sizes
Luôn sử dụng responsive breakpoints:
```tsx
// ✅ Good
<h2 className="text-3xl md:text-4xl lg:text-5xl">

// ❌ Bad
<h2 className="text-5xl">
```

### 3. Font Weights
- **font-black** (900): Chỉ cho h1, h2
- **font-bold** (700): Cho h3, h4, và emphasis text
- **font-semibold** (600): Cho h5, h6, labels
- **font-medium** (500): Cho body-lg, subtitles
- **font-normal** (400): Cho body text mặc định

### 4. Line Height
- Headings: `leading-tight` hoặc `leading-[1.1]`
- Body text: `leading-relaxed`
- Labels: `leading-snug`

### 5. Tracking (Letter Spacing)
- Headings: `tracking-tight`
- Labels: `tracking-wider` hoặc `tracking-widest`
- Body: Mặc định (không cần tracking)

## Examples

### Hero Section
```tsx
<h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
  Main Title
</h1>
<p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
  Subtitle
</p>
```

### Section Header
```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
  Section Title
</h2>
<p className="text-xl md:text-2xl font-medium leading-relaxed">
  Section description
</p>
```

### Card Title
```tsx
<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
  Card Title
</h3>
<p className="text-base md:text-lg font-normal leading-relaxed">
  Card description
</p>
```

### Badge/Label
```tsx
<span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
  Badge Text
</span>
```

## Migration Checklist

Khi cập nhật components, đảm bảo:

- [ ] Tất cả headings sử dụng h1-h6 tags với classes phù hợp
- [ ] Body text sử dụng .text-body, .text-body-lg, hoặc .text-body-sm
- [ ] Labels sử dụng .text-label hoặc .text-label-lg
- [ ] Tất cả sizes có responsive breakpoints (md:, lg:, xl:)
- [ ] Font weights phù hợp với hierarchy
- [ ] Line heights phù hợp với element type
- [ ] Không sử dụng font sizes tùy ý (như text-7xl, text-8xl trừ hero)

## Components đã được cập nhật

- [x] globals.css - Typography scale definitions
- [x] lib/typography.ts - Typography utility constants
- [ ] components/hero-section.tsx
- [ ] components/problem-diagnosis.tsx
- [ ] components/stats-section.tsx
- [ ] components/benefits-section.tsx
- [ ] components/process-section.tsx
- [ ] components/faq-section.tsx
- [ ] components/testimonials-section.tsx
- [ ] components/header.tsx
- [ ] components/footer.tsx

