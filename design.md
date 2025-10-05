# Design System - Interaktywny Poradnik Git

## Filozofia Designu

**Motyw**: Modern Developer Workspace
**Kolorystyka**: Ciemny motyw z akcentami neonowymi, inspirowany terminalami i edytorami kodu
**Nastrój**: Profesjonalny, edukacyjny, inspirujący do nauki

## Paleta Kolorów

### Kolory Podstawowe
- **Background Dark**: `#0a0e1a` (głęboki granat/czarny)
- **Background Light**: `#1a1f2e` (jasniejszy granat)
- **Surface**: `#252a3a` (powierzchnie kart, paneli)
- **Border**: `#3a3f4f` (granice i linie)

### Kolory Akcentów
- **Primary Neon**: `#00ff88` (zieleń neonowa - sukces)
- **Secondary Neon**: `#ff6b6b` (czerwień neonowa - błędy)
- **Warning**: `#ffd93d` (żółty - ostrzeżenia)
- **Info**: `#4ecdc4` (turkusowy - informacje)
- **Purple Accent**: `#a78bfa` (fioletowy - akcenty)

### Kolory Tekstu
- **Text Primary**: `#ffffff` (biały)
- **Text Secondary**: `#b8c5d1` (jasnoszary)
- **Text Muted**: `#6b7280` (ciemnoszary)

## Typografia

### Czcionki
- **Primary Font**: `'JetBrains Mono', 'Fira Code', monospace` (dla kodu i terminala)
- **Secondary Font**: `'Inter', 'Roboto', sans-serif` (dla treści)
- **Accent Font**: `'Space Grotesk', sans-serif` (dla nagłówków)

### Hierarchia Tekstu
- **H1**: 3.5rem, bold, `Space Grotesk`
- **H2**: 2.5rem, semibold, `Space Grotesk`
- **H3**: 1.875rem, medium, `Space Grotesk`
- **Body**: 1rem, regular, `Inter`
- **Code**: 0.875rem, `JetBrains Mono`
- **Small**: 0.75rem, medium, `Inter`

## Efekty Wizualne

### Animacje i Przejścia
- **Terminal Typewriter**: Animacja pisania tekstu w terminalu
- **Glow Effects**: Efekt świecenia dla elementów neonowych
- **Pulse Animation**: Dla przycisków aktywnych
- **Slide Transitions**: Pomiędzy sekcjami tutoriala
- **Fade In**: Dla nowo pojawiających się elementów

### Tło i Dekoracje
- **Animated Grid**: Subtelna animowana siatka w tle
- **Particle System**: Lekki efekt cząsteczek dla głębi
- **Gradient Overlays**: Płynne gradienty dla sekcji
- **Neon Shadows**: Cienie z kolorami neonowymi

## Komponenty UI

### Przyciski
- **Primary Button**: Neon zielony, efekt świecenia, hover z pulse
- **Secondary Button**: Przezroczysty z neonową ramką
- **Danger Button**: Czerwony neon dla akcji destrukcyjnych
- **Icon Button**: Okrągłe, z efektem hover

### Karty i Panele
- **Glassmorphism**: Przezroczyste tło z blur-em
- **Neon Borders**: Ramki z efektem neonowym
- **Elevated Cards**: Cienie i uniesienie
- **Terminal Panels**: Styl terminala z monospace fontem

### Formularze
- **Input Fields**: Ciemne tło, neonowa ramka przy focus
- **Dropdowns**: Styl terminala z animacją rozwijania
- **Checkboxes**: Neonowe, z efektem świecenia
- **Radio Buttons**: Podobny styl do checkboxes

## Layout i Struktura

### Grid System
- **Container**: Max-width 1200px, centered
- **Columns**: 12-column grid z gap 24px
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1440px+

### Sekcje Strony
- **Header**: Fixed, z efektem blur, wysokość 80px
- **Hero Section**: Full viewport height, z animowanym tłem
- **Content Sections**: Padding 120px vertical
- **Footer**: Minimalistyczny, z informacjami

### Nawigacja
- **Top Navigation**: Przezroczysty, z neonowymi akcentami
- **Side Panel**: Dla tutoriali i quizów
- **Breadcrumbs**: Styl terminala
- **Progress Indicators**: Neonowe paski postępu

## Interakcje i Stany

### Hover Effects
- **Buttons**: Pulse animation, glow increase
- **Cards**: Lift up, shadow expand
- **Links**: Underline animation
- **Images**: Zoom in, overlay fade

### Active States
- **Buttons**: Inner shadow, glow decrease
- **Tabs**: Neon border, background change
- **Menu Items**: Background highlight
- **Form Fields**: Neon border, focus ring

### Loading States
- **Skeleton**: Animowane tła ładowania
- **Spinners**: Neonowe, z efektem obrotu
- **Progress Bars**: Płynne wypełnianie
- **Dots**: Pulsujące kropki

## Ikony i Grafiki

### Style Ikon
- **Line Icons**: Cienkie linie, neonowe kolory
- **Terminal Icons**: Styl komputerowy, monospace
- **Git Icons**: Oficjalne logo Git, z neonowym efektem
- **Status Icons**: Kolorowe, z efektem świecenia

### Ilustracje
- **Isometric**: 3D style dla diagramów Git
- **Flat Design**: Dla ikon i elementów UI
- **Neon Style**: Dla dekoracyjnych elementów
- **Pixel Art**: Dla retro akcentów

## Responsywność

### Mobile First
- **Touch Targets**: Minimum 44px
- **Font Sizes**: Skalowane proporcjonalnie
- **Spacing**: Zmniejszone odstępy
- **Navigation**: Hamburger menu

### Tablet
- **Layout**: 2-column grid
- **Typography**: Zwiększone rozmiary
- **Interactions**: Touch-friendly
- **Images**: Optimalne rozmiary

### Desktop
- **Layout**: Full grid system
- **Effects**: Wszystkie animacje włączone
- **Hover**: Pełne efekty hover
- **Typography**: Maksymalne rozmiary