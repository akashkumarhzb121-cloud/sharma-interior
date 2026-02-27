# Sharma Interior — src/ Structure

```
src/
├── App.jsx                        ← Root component (Router + Layout + Routes)
│
├── components/
│   ├── ui/                        ← Reusable primitive UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx               (Card, CardHeader, CardTitle, CardContent)
│   │   ├── Pill.jsx
│   │   └── index.js               ← barrel export: import { Button, Card, Pill } from "../components/ui"
│   │
│   └── layout/                    ← Structural layout components
│       ├── Header.jsx             ← Sticky nav with mobile drawer
│       ├── Footer.jsx
│       ├── Container.jsx          ← Max-width wrapper
│       ├── Section.jsx            ← Section with optional title/subtitle
│       └── index.js               ← barrel export
│
├── pages/                         ← One file per route/page
│   ├── Home.jsx
│   ├── Company.jsx
│   ├── CustomDesign.jsx
│   ├── DesignBuild.jsx
│   ├── Products.jsx
│   ├── Offers.jsx
│   ├── Projects.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Careers.jsx
│   ├── Refer.jsx
│   ├── CSR.jsx
│   ├── AnnualReturn.jsx
│   ├── Sitemap.jsx
│   └── index.js                   ← barrel export: import { Home, Contact } from "../pages"
│
├── routes/
│   └── AppRoutes.jsx              ← All <Route> definitions in one place
│
├── hooks/
│   └── useContactForm.js          ← Form state + submit logic (reusable)
│
├── context/
│   └── AppContext.jsx             ← Global state (notifications, etc.)
│
├── redux/
│   └── store.js                   ← Redux Toolkit store (pre-configured, ready to enable)
│
├── services/
│   └── contactService.js          ← All API fetch calls (contact, referral, careers)
│
└── utils/
    ├── navItems.js                ← Shared nav link list (used by Header + Footer)
    └── formatters.js             ← Helpers: formatINR, truncate, getInitials
```

## How to work with this structure

### Adding a new page
1. Create `src/pages/MyPage.jsx`
2. Add its export to `src/pages/index.js`
3. Add its `<Route>` in `src/routes/AppRoutes.jsx`
4. Add a nav link to `src/utils/navItems.js` (auto-appears in Header + Footer)

### Adding a new UI component
Create it in `src/components/ui/` and export from `src/components/ui/index.js`.

### Adding an API call
Add a function to `src/services/contactService.js` (or create a new service file).
Consume it via a custom hook in `src/hooks/`.

### Adding global state
- **Simple**: Use `AppContext` in `src/context/AppContext.jsx`
- **Complex**: Uncomment and configure Redux in `src/redux/store.js`
