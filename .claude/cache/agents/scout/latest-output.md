# Codebase Report: Portfolio Website Structure
Generated: 2026-02-04

## Summary
This is a Django-based portfolio website with a Swiss-inspired minimalist design. The site displays jobs (work experience) and projects in a single-page layout with smooth scrolling, mouse spotlight effects, and reveal animations. Currently has 4 projects (including Equinova and Inkt) and 5 jobs.

## Project Structure

```
portfolio/
├── core/                           # Main Django app
│   ├── models.py                   # Job & Project models
│   ├── views.py                    # Index view
│   ├── admin.py                    # Django admin registration
│   ├── templates/core/
│   │   ├── _base.html             # Base template with design system
│   │   └── index.html             # Main page template
│   ├── static/
│   │   ├── css/styles.css         # Swiss design system CSS
│   │   ├── js/
│   │   │   ├── baseJs.js          # Mouse spotlight & grid overlay
│   │   │   └── indexJs.js         # Scroll reveal & navigation
│   │   ├── favicon.png
│   │   ├── favicon-180.png
│   │   └── resume.pdf
│   └── migrations/
├── portfolio/                      # Django project config
│   ├── settings.py
│   ├── urls.py                     # URL routing
│   └── wsgi.py
├── db.sqlite3                      # SQLite database
└── manage.py
```

## Questions Answered

### Q1: How are projects defined and rendered?

**Data Models** (`/home/kobe/Documents/portfolio/core/models.py`):

```python
class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField() 
    link = models.CharField(max_length=500)
    tags = models.JSONField('tags')  # Format: {"tags": ["tag1", "tag2"]}
    
    class Meta:
        ordering = ('title',)  # Alphabetical ordering
```

**View Logic** (`/home/kobe/Documents/portfolio/core/views.py`):
```python
def index(request):
    jobs = Job.objects.all()          # Gets all jobs
    projects = Project.objects.all()  # Gets all projects
    currentYear = datetime.now().year
    return render(request, 'core/index.html', {
        'jobs': jobs,
        'projects': projects,
        'year': currentYear,
    })
```

**Template Rendering** (`/home/kobe/Documents/portfolio/core/templates/core/index.html` lines 145-162):
- Projects displayed in a 2-column grid (1 column on mobile)
- Each project is a clickable card with hover effects
- Shows: title, description, tags
- Cards have Swiss-red accent animation on hover

### Q2: Current List of Projects

| Project | Description | Link | Tags |
|---------|-------------|------|------|
| **Equinova — L/S Momentum** | Live trading strategy deployed as a vault on Hyperliquid. Long/short momentum-based approach to crypto perpetual futures. | [Hyperliquid Vault](https://app.hyperliquid.xyz/vaults/0x8653be36bd297677e6ebcc33977fb780a689ff2c) | Python, Trading, Hyperliquid |
| **Inkt** | Book library platform with audio-text sync highlighting. Rust/Axum backend, SvelteKit frontend, PostgreSQL, deployed on Hetzner with Docker & Nginx. | [GitHub](https://github.com/AlgoQ/inkt-backend) | (no tags) |
| **Navalmanack** | Recreated the website of The Almanack of Naval Ravikant as a tribute to the book's impact. | [Live Site](https://navalmanack.vercel.app/) | Next.js, React, Vercel |
| **Trabro** | High-frequency market maker framework for crypto DEXs. Event-driven Rust architecture with ZeroMQ, ClickHouse, and multi-exchange connectors. | [GitHub](https://github.com/AlgoQ) | Rust, ZeroMQ, ClickHouse, WebSockets |

**Note**: Inkt project has empty tags array in database - should be populated.

### Q3: How the index/project listing works

**URL Routing** (`/home/kobe/Documents/portfolio/portfolio/urls.py`):
```python
urlpatterns = [
    path('', index, name='index'),     # Homepage
    path('admin/', admin.site.urls),   # Django admin
]
```

**Single-Page Layout Flow**:
1. **Sidebar (Left 40-45%)**: 
   - Header with name/title
   - Resume download button
   - Navigation dots (About, Experience, Projects)
   - Social links (GitHub, X, LinkedIn, Email)
   - Sticky on desktop, flows on mobile

2. **Main Panel (Right 55-60%)**:
   - About section (personal bio)
   - Experience section (jobs loop)
   - Projects section (projects loop in 2-col grid)
   - Footer

**Interactive Features**:
- Scroll-based reveal animations (IntersectionObserver)
- Active navigation tracking
- Smooth scrolling between sections
- Mouse spotlight following cursor
- Grid overlay background

### Q4: Overall structure of templates and static files

**Template Hierarchy**:
```
_base.html
  ├─ Tailwind CDN config (Swiss color palette)
  ├─ Google Fonts (Space Grotesk, IBM Plex Sans/Mono)
  ├─ styles.css link
  ├─ Grid overlay div
  ├─ Mouse spotlight div
  ├─ {% block content %}
  └─ baseJs.js script

index.html
  ├─ extends '_base.html'
  ├─ Sidebar header section
  ├─ Main content sections (About, Experience, Projects)
  └─ indexJs.js script
```

**Static Files**:

| File | Purpose | Key Features |
|------|---------|--------------|
| `css/styles.css` | Swiss design system | Grid overlay, spotlight, animations, card hovers |
| `js/baseJs.js` | Mouse effects | Spotlight follow with easing, grid fade-in |
| `js/indexJs.js` | Interactions | Scroll reveal, nav tracking, smooth scrolling |
| `favicon.png` | 16x16 icon | Standard favicon |
| `favicon-180.png` | 180x180 icon | Apple touch icon size |
| `resume.pdf` | Resume download | Linked from header button |

## Conventions Discovered

### Naming
- **Files**: camelCase for JS (`baseJs.js`, `indexJs.js`)
- **Templates**: underscore prefix for base (`_base.html`)
- **Models**: PascalCase (`Job`, `Project`)
- **CSS classes**: kebab-case (`swiss-red`, `text-primary`)

### Design System (Tailwind + Custom)
**Color Palette**:
```javascript
'swiss-red': '#E63946',           // Primary accent
'surface': '#0A0A0B',             // Background
'surface-raised': '#111113',      // Cards/elevated
'text-primary': '#FAFAFA',        // Primary text
'text-secondary': '#A1A1AA',      // Secondary text
'text-tertiary': '#71717A',       // Tertiary text
```

**Typography**:
- Display: Space Grotesk (headings)
- Body: IBM Plex Sans (paragraphs)
- Mono: IBM Plex Mono (tags, labels)

### Data Format
**Tags JSONField**:
```json
{"tags": ["Python", "Trading", "Hyperliquid"]}
```

**Job Years**:
- `-1` in `endYear` = "Now" (current position)
- Displayed as: "2024 — Now"

## Architecture Map

```
[Browser Request]
      ↓
[Django URLs] → portfolio/urls.py
      ↓
[View] → core/views.py::index()
      ↓
[ORM Query] → Job.objects.all() + Project.objects.all()
      ↓
[Template] → index.html (extends _base.html)
      ↓
[Static Assets] → CSS, JS, favicon, resume
      ↓
[Client-Side JS] → baseJs.js (effects) + indexJs.js (interactions)
```

## Key Files

| File | Purpose | Entry Points |
|------|---------|--------------|
| `/home/kobe/Documents/portfolio/core/models.py` | Data models | `Job`, `Project` classes |
| `/home/kobe/Documents/portfolio/core/views.py` | Request handling | `index()` function |
| `/home/kobe/Documents/portfolio/core/templates/core/_base.html` | Base template | Design system, Tailwind config |
| `/home/kobe/Documents/portfolio/core/templates/core/index.html` | Main page | Sidebar + sections |
| `/home/kobe/Documents/portfolio/core/static/css/styles.css` | Styling | Swiss design system |
| `/home/kobe/Documents/portfolio/core/static/js/baseJs.js` | Visual effects | Spotlight, grid overlay |
| `/home/kobe/Documents/portfolio/core/static/js/indexJs.js` | Interactions | Scroll reveal, navigation |
| `/home/kobe/Documents/portfolio/portfolio/urls.py` | Routing | URL patterns |
| `/home/kobe/Documents/portfolio/db.sqlite3` | Database | 4 projects, 5 jobs |

## Database Content Summary

**Projects**: 4 total (alphabetically ordered)
1. Equinova — L/S Momentum (trading vault)
2. Inkt (book platform - MISSING TAGS)
3. Navalmanack (tribute website)
4. Trabro (HFT framework)

**Jobs**: 5 total (newest first)
1. Founder · Inkt (2025 - Now) - MISSING TAGS
2. Front-End Developer · TradeStream (2024-2025)
3. Quant Research Developer · Trading Research Hub (2024-2025)
4. NodeJs Developer · CCXT (2022-2023)
5. Quantitative Data Scientist · The Elysian Fund (2021-2022)

## Design Patterns

### Swiss International Style
- Minimal color palette (red accent only)
- Precise grid system (60px squares)
- Clean typography hierarchy
- Geometric simplicity
- Functional hover states

### Interaction Patterns
1. **Scroll Reveal**: Elements fade up when scrolled into view
2. **Mouse Spotlight**: Radial gradient follows cursor with easing
3. **Active Navigation**: Nav dots highlight based on scroll position
4. **Card Hovers**: Red accent bar appears/extends on hover
5. **Inline Links**: Underline animates from left to right

### Responsive Design
- Desktop: 2-column layout (sticky sidebar + scrollable main)
- Mobile: Single column flow
- Grid overlay disabled on mobile
- Spotlight disabled on mobile

## Open Questions
- Should Inkt project have tags? (currently empty array)
- Should "Founder · Inkt" job have tags? (currently empty array)
- Are there other projects/jobs to add?
- Should project ordering be changed from alphabetical?
