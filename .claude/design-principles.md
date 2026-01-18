# Tyndfed Design Principles

## Core Philosophy
- **Dark-first**: All designs are dark theme only
- **Minimal & Clean**: Uncluttered interfaces with ample white space
- **Purposeful Animation**: Subtle micro-interactions that enhance UX
- **macOS Aesthetic**: Window chrome concept throughout

## Design Tokens (from app.css)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-void` | #0c0c0f | Page background |
| `--bg-surface` | #101014 | Card/window background |
| `--bg-elevated` | #16161b | Elevated surfaces |
| `--bg-hover` | #1c1c22 | Hover states |
| `--accent` | #00f0ff | Primary accent (cyan) |
| `--accent-secondary` | #ff6b4a | Secondary accent (coral) |
| `--text-primary` | #f0f0f2 | Main text |
| `--text-secondary` | #a0a0a8 | Secondary text |
| `--text-muted` | #606068 | Muted text |
| `--text-ghost` | #404048 | Ghost/disabled text |

### Typography
- **Display font**: Space Grotesk (headings, buttons)
- **Mono font**: JetBrains Mono (body, code)
- **Scale**: xs(11px), sm(12px), base(15px), lg(17px), xl(20px), 2xl(28px), 3xl(36px)

### Spacing
Base unit: 8px
Scale: 4, 8, 12, 16, 24, 32, 48, 64px

### Animation
- **Duration**: instant(100ms), fast(150ms), normal(250ms), slow(400ms)
- **Easing**: ease-out-expo, ease-spring for interactions

## Component Patterns

### Buttons
- Primary: Accent background with glow on hover
- Secondary: Transparent with border, fills on hover
- Always include hover lift effect (translateY -2px)

### Cards
- Background: `--bg-elevated`
- Border: 1px solid `--chrome-border`
- Border radius: 12-14px
- Hover: lift + accent border glow

### Links
- Default: inherit color or muted
- Hover: accent color with optional underline animation

### WindowChrome
- Traffic light buttons (close/minimize/maximize)
- Centered title with status dot
- Subtle gradient title bar

## Accessibility Checklist
- [ ] Color contrast 4.5:1 minimum
- [ ] Focus states visible (2px accent outline)
- [ ] Touch targets 44px minimum
- [ ] Reduced motion respected (@media prefers-reduced-motion)

## Code Conventions
- CSS Modules for component styles
- camelCase class names (e.g., `.projectLink`)
- Global styles only in `app.css`
- Use CSS variables for all colors/spacing
