# SOCRATES: COMPLETE TECH STACK BREAKDOWN
## Everything You Need (Small to Big) 📚

---

# TABLE OF CONTENTS
1. [Development Tools & Languages](#1-development-tools--languages)
2. [Frontend Small Utilities](#2-frontend-small-utilities)
3. [Frontend Core Libraries](#3-frontend-core-libraries)
4. [Frontend Frameworks & Bundlers](#4-frontend-frameworks--bundlers)
5. [Frontend Advanced Libraries](#5-frontend-advanced-libraries)
6. [Backend Small Utilities](#6-backend-small-utilities)
7. [Backend Core Libraries](#7-backend-core-libraries)
8. [Backend Frameworks](#8-backend-frameworks)
9. [Database & ODM](#9-database--odm)
10. [Real-Time Communication](#10-real-time-communication)
11. [Video & Audio Technology](#11-video--audio-technology)
12. [Payment Processing](#12-payment-processing)
13. [Cloud Storage & CDN](#13-cloud-storage--cdn)
14. [Authentication & Security](#14-authentication--security)
15. [Email & Notifications](#15-email--notifications)
16. [Testing & Debugging](#16-testing--debugging)
17. [Deployment & DevOps](#17-deployment--devops)
18. [Monitoring & Analytics](#18-monitoring--analytics)
19. [Development Environment](#19-development-environment)
20. [Complete Installation Commands](#20-complete-installation-commands)

---

# 1. DEVELOPMENT TOOLS & LANGUAGES

## **JavaScript/TypeScript**
| Tool | Type | Purpose | Cost | Link |
|------|------|---------|------|------|
| **Node.js** | Language Runtime | Run JavaScript on backend | FREE | https://nodejs.org |
| Version Required | | v18.0.0 or higher | | |
| Installation | | Download LTS version | | |
| | | | | |
| **TypeScript** | Language Superset | Optional: Type safety for JS | FREE | https://www.typescriptlang.org |
| Version | | v5.0+ | | |
| Why Use | | Catch errors early, better IDE support | | |

## **Git & Version Control**
| Tool | Type | Purpose | Cost | Link |
|------|------|---------|------|------|
| **Git** | Version Control | Track code changes | FREE | https://git-scm.com |
| Version | | v2.30+ | | |
| **GitHub** | Repository Hosting | Store code online | FREE/PAID | https://github.com |
| Plan | | Free plan enough for college | | |
| **GitHub Desktop** | GUI Tool | Visual Git management (optional) | FREE | https://desktop.github.com |

## **Package Managers**
| Tool | Type | Purpose | Cost | Link |
|------|------|---------|------|------|
| **npm** | Package Manager | Install dependencies (comes with Node.js) | FREE | Included in Node |
| Version | | v9.0+ | | |
| **yarn** | Alternative | Alternative to npm (optional) | FREE | https://yarnpkg.com |
| Why Use | | Faster, better for large projects | | |
| **pnpm** | Modern Alternative | Ultra-fast package manager | FREE | https://pnpm.io |
| Why Use | | Best performance, disk efficient | | |

---

# 2. FRONTEND SMALL UTILITIES

## **CSS & Styling Utilities**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **clsx** | Utility | Conditional CSS class names | ^1.2.1 | FREE | https://github.com/lukeed/clsx |
| Usage | | `clsx('bg-blue', isActive && 'opacity-100')` | | | |
| Install | | `npm install clsx` | | | |
| | | | | | |
| **classnames** | Utility | Alternative to clsx | ^2.3.2 | FREE | https://www.npmjs.com/package/classnames |
| | | Same purpose, slightly different API | | | |
| | | | | | |
| **tailwind-merge** | Utility | Merge Tailwind CSS classes | ^2.2.0 | FREE | https://github.com/dcastil/tailwind-merge |
| Usage | | Resolve class conflicts in Tailwind | | | |
| | | | | | |
| **tailwindcss-animate** | Plugin | Animation utilities for Tailwind | ^1.0.7 | FREE | https://www.npmjs.com/package/tailwindcss-animate |
| Usage | | Add fade, slide, bounce animations | | | |

## **Date & Time Handling**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **date-fns** | Library | Date manipulation & formatting | ^2.30.0 | FREE | https://date-fns.org |
| Why Use | | Better than moment.js, smaller bundle | | | |
| Usage | | Format dates, calculate differences, timezone | | | |
| Install | | `npm install date-fns` | | | |
| | | | | | |
| **Day.js** | Alternative | Lightweight date library | ^1.11.10 | FREE | https://day.js.org |
| Bundle Size | | Only 2KB vs moment.js 70KB | | | |
| | | | | | |
| **react-day-picker** | Component | Date picker component | ^8.9.0 | FREE | https://react-day-picker.js.org |
| Usage | | For booking calendar date selection | | | |
| Install | | `npm install react-day-picker` | | | |

## **Validation & Type Checking**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Zod** | Schema Validator | TypeScript-first validation | ^3.22.4 | FREE | https://zod.dev |
| Usage | | Validate forms, API responses, types | | | |
| Install | | `npm install zod` | | | |
| | | | | | |
| **Yup** | Alternative | Schema validation library | ^1.3.3 | FREE | https://www.npmjs.com/package/yup |
| | | Works with React Hook Form | | | |
| | | | | | |
| **Joi** | Alternative | Data validation (backend recommended) | ^17.11.0 | FREE | https://joi.dev |
| | | More powerful than Yup for complex schemas | | | |

## **Utility Helpers**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **lodash** | Utility | Common functions (debounce, throttle, etc) | ^4.17.21 | FREE | https://lodash.com |
| Popular Functions | | `_.debounce()`, `_.throttle()`, `_.cloneDeep()` | | | |
| Install | | `npm install lodash` | | | |
| | | | | | |
| **lodash-es** | Better | ES module version of lodash | ^4.17.21 | FREE | https://www.npmjs.com/package/lodash-es |
| Why Use | | Tree-shakeable, smaller bundle | | | |
| | | | | | |
| **uuid** | Utility | Generate unique IDs | ^9.0.1 | FREE | https://www.npmjs.com/package/uuid |
| Usage | | Create unique keys for list items | | | |
| Install | | `npm install uuid` | | | |

## **Environment Variables**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **dotenv** | Config | Load .env files (Frontend) | ^16.3.1 | FREE | https://www.npmjs.com/package/dotenv |
| Usage | | Access REACT_APP_API_URL etc | | | |
| Install | | `npm install dotenv` | | | |
| Note | | Usually auto-loaded in React (Vite) | | | |

---

# 3. FRONTEND SMALL-MEDIUM LIBRARIES

## **HTTP Client & API**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **axios** | HTTP Client | Make API requests | ^1.6.2 | FREE | https://axios-http.com |
| Why Use | | Better error handling than fetch | | | |
| Usage | | API calls to backend endpoints | | | |
| Install | | `npm install axios` | | | |
| Features | | Interceptors, request/response transforms | | | |
| | | | | | |
| **fetch API** | Native | Browser built-in HTTP | Native | FREE | Browser native |
| Why Use | | No dependency needed | | | |
| Note | | Modern browsers support it | | | |
| | | | | | |
| **react-query** (TanStack Query) | State Mgmt | Server state management | ^3.39.3 | FREE | https://tanstack.com/query |
| Why Use | | Automatic caching, background refetch | | | |
| Usage | | `useQuery()`, `useMutation()` hooks | | | |
| Install | | `npm install @tanstack/react-query` | | | |

## **Form Management**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **react-hook-form** | Forms | Efficient form handling | ^7.48.0 | FREE | https://react-hook-form.com |
| Why Use | | Minimal re-renders, small bundle | | | |
| Usage | | Login, registration, booking forms | | | |
| Install | | `npm install react-hook-form` | | | |
| Pairs With | | Zod for validation | | | |
| | | | | | |
| **formik** | Alternative | Form state management | ^2.4.5 | FREE | https://formik.org |
| | | More opinionated than react-hook-form | | | |

## **UI Component Primitives**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **headless-ui** | Components | Unstyled, accessible components | ^1.7.16 | FREE | https://headlessui.com |
| Components | | Menu, Dialog, Listbox, Combobox, etc | | | |
| Why Use | | Complete control over styling | | | |
| Install | | `npm install @headlessui/react` | | | |
| | | | | | |
| **radix-ui** | Alternative | More powerful component library | ^1.7.0 | FREE | https://www.radix-ui.com |
| | | Better for complex components | | | |
| | | | | | |
| **shadcn/ui** | Pre-built | Ready-made Radix + Tailwind components | - | FREE | https://ui.shadcn.com |
| Components | | Button, Card, Dialog, Input, etc | | | |
| Why Use | | Copy-paste components (not npm package) | | | |
| | | | | | |
| **react-icons** | Icons | Icon library | ^4.12.0 | FREE | https://react-icons.github.io/react-icons |
| Icons | | 30,000+ icons from all sources | | | |
| Install | | `npm install react-icons` | | | |
| Usage | | `<FaHome />`, `<MdSearch />` | | | |

## **Rich Text & Markdown**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **react-markdown** | Markdown | Render markdown content | ^9.0.1 | FREE | https://www.npmjs.com/package/react-markdown |
| Usage | | Display tutor bio, reviews as markdown | | | |
| Install | | `npm install react-markdown` | | | |
| | | | | | |
| **marked** | Parser | Parse markdown to HTML | ^11.1.0 | FREE | https://marked.js.org |
| | | Lower-level than react-markdown | | | |
| | | | | | |
| **react-quill** | Editor | Rich text editor | ^2.0.0 | FREE | https://github.com/zenoamaro/react-quill |
| Usage | | For review comments, tutor bio editor | | | |
| Install | | `npm install react-quill` | | | |

## **Image Handling**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **react-lazy-load-image-component** | Optimization | Lazy load images | ^1.10.0 | FREE | https://www.npmjs.com/package/react-lazy-load-image-component |
| Usage | | Load tutor photos only when visible | | | |
| Install | | `npm install react-lazy-load-image-component` | | | |
| | | | | | |
| **sharp** | Image Processing | Image resize, compress (backend) | ^0.33.0 | FREE | https://sharp.pixelplumbing.com |
| Usage | | Optimize uploaded photos | | | |
| Install | | `npm install sharp` | | | |
| Note | | Backend tool, not frontend | | | |

## **State Management (Optional)**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **zustand** | State | Lightweight state manager | ^4.4.6 | FREE | https://github.com/pmndrs/zustand |
| Why Use | | Simpler than Redux, tiny bundle | | | |
| Usage | | Global state (auth, user, theme) | | | |
| Install | | `npm install zustand` | | | |
| | | | | | |
| **redux** | Alternative | Enterprise state management | ^4.2.1 | FREE | https://redux.js.org |
| | | Overkill for this project | | | |
| | | | | | |
| **jotai** | Alternative | Primitive & flexible state | ^2.4.1 | FREE | https://jotai.org |
| | | Similar to Zustand, more atomic | | | |

---

# 4. FRONTEND FRAMEWORKS & BUNDLERS

## **Frontend Framework**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **React.js** | Framework | UI library | ^18.2.0 | FREE | https://react.dev |
| Features | | Component-based, hooks, JSX | | | |
| Why Use | | Most popular, large ecosystem | | | |
| Install | | `npm create vite@latest my-app -- --template react` | | | |

## **Build Tools & Bundlers**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Vite** | Bundler | Ultra-fast build tool | ^5.0.0 | FREE | https://vitejs.dev |
| Why Use | | Lightning fast dev server, instant HMR | | | |
| Why Choose Over Webpack | | 10-100x faster | | | |
| Install | | `npm create vite@latest` | | | |
| | | | | | |
| **Webpack** | Alternative | Traditional bundler (if needed) | ^5.89.0 | FREE | https://webpack.js.org |
| | | Slower but more powerful | | | |
| | | | | | |
| **Turbopack** | Future | Next-gen Webpack replacement | Pre-release | FREE | https://turbo.build/pack |
| | | Not production-ready yet (2024) | | | |

## **Styling Solutions**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Tailwind CSS** | CSS Framework | Utility-first CSS | ^3.3.6 | FREE | https://tailwindcss.com |
| Why Use | | Faster development, smaller bundle | | | |
| Install | | `npm install -D tailwindcss postcss autoprefixer` | | | |
| Features | | Responsive, dark mode, custom config | | | |
| | | | | | |
| **PostCSS** | Processor | Process CSS transformations | ^8.4.32 | FREE | https://postcss.org |
| Needed For | | Tailwind CSS requires this | | | |
| Install | | `npm install -D postcss` | | | |
| | | | | | |
| **Autoprefixer** | Plugin | Add vendor prefixes automatically | ^10.4.16 | FREE | https://github.com/postcss/autoprefixer |
| Install | | `npm install -D autoprefixer` | | | |
| | | | | | |
| **Sass/SCSS** | Alternative | Powerful CSS preprocessor | ^1.69.5 | FREE | https://sass-lang.com |
| Why Use | | If you prefer Sass over Tailwind | | | |
| Install | | `npm install -D sass` | | | |

## **Routing & Navigation**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **React Router v6** | Router | Client-side routing | ^6.18.0 | FREE | https://reactrouter.com |
| Features | | Routes, params, nested routes | | | |
| Usage | | Navigate between pages | | | |
| Install | | `npm install react-router-dom` | | | |
| | | | | | |
| **TanStack Router** | Modern | Modern type-safe router | ^1.1.0 | FREE | https://tanstack.com/router |
| | | Better TypeScript support | | | |
| Install | | `npm install @tanstack/react-router` | | | |

---

# 5. FRONTEND ADVANCED LIBRARIES

## **Animation & Motion**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Framer Motion** | Animation | Declarative animations | ^10.16.4 | FREE | https://www.framer.com/motion |
| Usage | | Smooth transitions, page animations | | | |
| Install | | `npm install framer-motion` | | | |
| Features | | Keyframes, variants, gestures | | | |
| | | | | | |
| **react-spring** | Alternative | Spring-based animations | ^9.7.3 | FREE | https://www.react-spring.dev |
| | | Physics-based animations | | | |
| | | | | | |
| **Motion** | New | From Framer team (newer) | ^10.16.0 | FREE | https://motion.dev |
| | | Next-gen animation library | | | |

## **Calendar & Scheduling**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **FullCalendar** | Component | Advanced calendar widget | ^6.1.10 | FREEMIUM | https://fullcalendar.io |
| License | | Free for open source | | | |
| Features | | Drag-drop, time grid, event management | | | |
| Install | | `npm install @fullcalendar/react @fullcalendar/daygrid` | | | |
| Packages Needed | | See detailed install below | | | |
| | | | | | |
| **react-big-calendar** | Alternative | Open-source calendar | ^1.8.5 | FREE | https://jquense.github.io/react-big-calendar |
| | | Simpler than FullCalendar | | | |
| Install | | `npm install react-big-calendar` | | | |

## **Data Tables & Grids**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **TanStack Table (React Table)** | Table | Headless table component | ^8.10.3 | FREE | https://tanstack.com/table |
| Why Use | | Sorting, filtering, pagination | | | |
| Install | | `npm install @tanstack/react-table` | | | |
| | | | | | |
| **AG Grid** | Enterprise | Professional data grid | v31.0.0 | FREEMIUM | https://www.ag-grid.com |
| Free Version | | Sufficient for this project | | | |
| Install | | `npm install ag-grid-community ag-grid-react` | | | |

## **Video/Media Players**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **react-player** | Player | Video player component | ^2.13.0 | FREE | https://github.com/cookpete/react-player |
| Usage | | Play recorded session videos | | | |
| Install | | `npm install react-player` | | | |
| Supports | | YouTube, Vimeo, MP4, HLS, etc | | | |
| | | | | | |
| **Video.js** | Alternative | Open-source video player | ^8.5.0 | FREE | https://videojs.com |
| | | More control over customization | | | |
| Install | | `npm install video.js` | | | |

## **Charts & Data Visualization**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Recharts** | Charts | React charting library | ^2.10.3 | FREE | https://recharts.org |
| Usage | | Tutor earnings graphs, analytics | | | |
| Install | | `npm install recharts` | | | |
| | | | | | |
| **Chart.js** | Alternative | Popular charting library | ^4.4.0 | FREE | https://www.chartjs.org |
| With React | | `npm install chart.js react-chartjs-2` | | | |

## **Notifications & Toasts**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **react-toastify** | Notifications | Toast notifications | ^9.1.3 | FREE | https://fkhadra.github.io/react-toastify |
| Usage | | Show success/error messages | | | |
| Install | | `npm install react-toastify` | | | |
| | | | | | |
| **Sonner** | Modern Alternative | Beautiful toast notifications | ^1.3.0 | FREE | https://sonner.emilkowal.ski |
| Why Use | | Better design, smoother animations | | | |
| Install | | `npm install sonner` | | | |

## **Modal & Dialog**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Dialog (HTML)** | Native | Browser native dialog | Native | FREE | Native element |
| Why Use | | No dependency needed | | | |
| | | | | | |
| **react-modal** | Library | Modal component | ^3.16.1 | FREE | https://reactcommunity.org/react-modal |
| Install | | `npm install react-modal` | | | |
| | | | | | |
| **Headless UI Dialog** | Component | From Headless UI | ^1.7.16 | FREE | https://headlessui.com |
| Already Included | | If using Headless UI | | | |

## **Web Sockets / Real-Time**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Socket.IO Client** | WebSocket | Real-time communication client | ^4.7.2 | FREE | https://socket.io |
| Usage | | Chat, live notifications | | | |
| Install | | `npm install socket.io-client` | | | |
| Features | | Auto-reconnect, fallbacks | | | |

## **Video Calling - Choose ONE**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Daily.co SDK** | Video | Easiest video calling solution | ^0.24.1 | PAID | https://www.daily.co |
| Cost | | $0 - $0.04/min pay-as-you-go | | | |
| Why Use | | 5 days to implement vs 22 for WebRTC | | | |
| Install | | `npm install @daily-co/daily-js` | | | |
| **RECOMMENDED FOR COLLEGE SGP** | | | | | |
| | | | | | |
| **Jitsi Meet SDK** | Video | Open-source alternative | ^1.0.0 | FREE | https://jitsi.org |
| | | Reliable, free hosting option | | | |
| Install | | `npm install @jitsi/react-sdk` | | | |
| | | | | | |
| **WebRTC** | Protocol | Raw WebRTC (not recommended) | Native | FREE | Browser native |
| Why NOT Recommended | | 22 days development, complex setup | | | |
| Difficulty | | ⭐⭐⭐⭐⭐ (Extremely hard) | | | |

---

# 6. BACKEND SMALL UTILITIES

## **Utility & Helper Functions**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **dotenv** | Config | Load environment variables | ^16.3.1 | FREE | https://www.npmjs.com/package/dotenv |
| Usage | | Store secrets, API keys, DB credentials | | | |
| Install | | `npm install dotenv` | | | |
| | | | | | |
| **uuid** | Utility | Generate unique identifiers | ^9.0.1 | FREE | https://www.npmjs.com/package/uuid |
| Usage | | Create IDs for records | | | |
| Install | | `npm install uuid` | | | |
| | | | | | |
| **lodash** | Utility | Common functions | ^4.17.21 | FREE | https://lodash.com |
| Usage | | `_.merge()`, `_.groupBy()` etc | | | |
| Install | | `npm install lodash` | | | |
| | | | | | |
| **moment-timezone** | Time | Timezone handling | ^0.5.45 | FREE | https://momentjs.com/timezone |
| Usage | | Convert times to user timezones | | | |
| Install | | `npm install moment-timezone` | | | |
| | | | | | |
| **validator** | Validation | String validation | ^13.11.0 | FREE | https://www.npmjs.com/package/validator |
| Usage | | Email, URL, phone validation | | | |
| Install | | `npm install validator` | | | |

## **HTTP & Request Utilities**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **axios** | HTTP | Make outgoing requests | ^1.6.2 | FREE | https://axios-http.com |
| Usage | | Call external APIs (Stripe, etc) | | | |
| Install | | `npm install axios` | | | |
| | | | | | |
| **node-fetch** | Alternative | Fetch API for Node.js | ^3.3.2 | FREE | https://github.com/node-fetch/node-fetch |
| | | Modern alternative to axios | | | |
| | | | | | |
| **superagent** | Alternative | Lightweight HTTP library | ^8.1.2 | FREE | https://visionmedia.github.io/superagent |
| | | Simple and straightforward | | | |

## **File Upload & Processing**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **multer** | Middleware | Handle file uploads | ^1.4.5-lts.1 | FREE | https://github.com/expressjs/multer |
| Usage | | Process tutor photo uploads | | | |
| Install | | `npm install multer` | | | |
| | | | | | |
| **sharp** | Image | Image processing | ^0.33.0 | FREE | https://sharp.pixelplumbing.com |
| Usage | | Resize, compress tutor photos | | | |
| Install | | `npm install sharp` | | | |
| | | | | | |
| **busboy** | Parser | Parse form data | ^1.3.0 | FREE | https://www.npmjs.com/package/busboy |
| Usage | | Alternative to multer | | | |

## **JSON Processing**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **JSON Web Tokens (JWT)** | Library | Create secure tokens | Part of Node | FREE | Native |
| Manual | | Use `jsonwebtoken` package | ^9.1.2 | | https://www.npmjs.com/package/jsonwebtoken |
| Install | | `npm install jsonwebtoken` | | | |

---

# 7. BACKEND CORE LIBRARIES

## **Security & Hashing**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **bcrypt** | Password Hashing | Hash & compare passwords | ^5.1.1 | FREE | https://www.npmjs.com/package/bcrypt |
| Why Use | | Industry standard for password storage | | | |
| Usage | | Hash user passwords before saving | | | |
| Install | | `npm install bcrypt` | | | |
| | | | | | |
| **bcryptjs** | Alternative | Pure JS version (slower) | ^2.4.3 | FREE | https://www.npmjs.com/package/bcryptjs |
| | | When native modules not available | | | |
| | | | | | |
| **jsonwebtoken** | Auth | Create & verify JWT tokens | ^9.1.2 | FREE | https://www.npmjs.com/package/jsonwebtoken |
| Usage | | Session management, token auth | | | |
| Install | | `npm install jsonwebtoken` | | | |
| | | | | | |
| **helmet** | Security | Set HTTP security headers | ^7.1.0 | FREE | https://helmetjs.github.io |
| Prevents | | XSS, clickjacking, MIME-sniffing | | | |
| Install | | `npm install helmet` | | | |
| | | | | | |
| **cors** | Middleware | Enable CORS (Cross-Origin) | ^2.8.5 | FREE | https://www.npmjs.com/package/cors |
| Usage | | Allow frontend to call backend | | | |
| Install | | `npm install cors` | | | |
| | | | | | |
| **express-rate-limit** | Security | Rate limiting | ^7.1.5 | FREE | https://github.com/nfriedly/express-rate-limit |
| Usage | | Prevent brute-force attacks | | | |
| Install | | `npm install express-rate-limit` | | | |

## **Email Sending**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **nodemailer** | Email | Send emails | ^6.9.7 | FREE | https://nodemailer.com |
| Usage | | Verification emails, password reset | | | |
| Install | | `npm install nodemailer` | | | |
| SMTP Services | | Gmail, SendGrid, AWS SES, etc | | | |
| | | | | | |
| **SendGrid** | Service | Professional email service | N/A | FREE/PAID | https://sendgrid.com |
| Free Tier | | 100 emails/day free | | | |
| | | | | | |
| **Resend** | Service | Modern email service | N/A | FREE/PAID | https://resend.com |
| Cost | | $0.0001 per email | | | |
| Best For | | Professional email templates | | | |

---

# 8. BACKEND FRAMEWORKS

## **Web Server Framework**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Express.js** | Framework | Web server & routing | ^4.18.2 | FREE | https://expressjs.com |
| Why Use | | Most popular Node.js framework | | | |
| Install | | `npm install express` | | | |
| Features | | Middleware, routing, easy setup | | | |
| | | | | | |
| **Fastify** | Modern | Ultra-fast web framework | ^4.25.1 | FREE | https://www.fastify.io |
| Why Use | | 2-3x faster than Express | | | |
| Trade-off | | Smaller ecosystem than Express | | | |
| Install | | `npm install fastify` | | | |
| | | | | | |
| **Hapi** | Alternative | Enterprise framework | ^21.3.2 | FREE | https://hapi.dev |
| | | Heavier, more structured | | | |
| | | | | | |
| **NestJS** | TypeScript | Full-featured framework | ^10.2.10 | FREE | https://nestjs.com |
| Why Use | | TypeScript-first, modular | | | |
| Trade-off | | Steeper learning curve, slower startup | | | |

## **Middleware & Utilities**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **express-async-errors** | Utility | Handle async errors | ^3.1.1 | FREE | https://www.npmjs.com/package/express-async-errors |
| Usage | | Catch errors in async functions | | | |
| Install | | `npm install express-async-errors` | | | |
| | | | | | |
| **compression** | Middleware | Gzip compression | ^1.7.4 | FREE | https://www.npmjs.com/package/compression |
| Usage | | Reduce response size | | | |
| Install | | `npm install compression` | | | |
| | | | | | |
| **morgan** | Logging | HTTP request logging | ^1.10.0 | FREE | https://www.npmjs.com/package/morgan |
| Usage | | Log API requests for debugging | | | |
| Install | | `npm install morgan` | | | |

---

# 9. DATABASE & ODM

## **Database**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **MongoDB** | Database | NoSQL document database | Latest | FREEMIUM | https://www.mongodb.com |
| Hosting | | MongoDB Atlas (cloud) | | FREE/PAID | https://www.mongodb.com/cloud/atlas |
| Free Tier | | 512MB storage (sufficient for college) | | | |
| Why Use | | Easy to use, scalable, flexible schema | | | |
| Setup | | Register at MongoDB Atlas | | | |
| Connection String | | mongodb+srv://user:pass@cluster | | | |
| | | | | | |
| **PostgreSQL** | Alternative | SQL database | Latest | FREE | https://www.postgresql.org |
| Why Consider | | Better for relational data | | | |
| | | | | | |
| **Firebase Realtime DB** | Alternative | Google's NoSQL | N/A | FREEMIUM | https://firebase.google.com |
| Free Tier | | 100 concurrent connections | | | |
| Advantage | | Built-in authentication | | | |

## **Object-Document Mapper (ODM)**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Mongoose** | ODM | MongoDB schema modeling | ^8.0.3 | FREE | https://mongoosejs.com |
| Why Use | | Schema validation, hooks, plugins | | | |
| Usage | | Define User, Tutor, Session models | | | |
| Install | | `npm install mongoose` | | | |
| | | | | | |
| **Prisma** | ORM | Type-safe database access | ^5.6.0 | FREE | https://www.prisma.io |
| Works With | | PostgreSQL, MySQL, MongoDB, SQLite | | | |
| Why Use | | Better TypeScript support than Mongoose | | | |
| Install | | `npm install @prisma/client` | | | |
| | | | | | |
| **TypeORM** | ORM | TypeScript ORM | ^0.3.17 | FREE | https://typeorm.io |
| | | More control, steeper learning curve | | | |

## **Database Indexing & Optimization**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **MongoDB Compass** | GUI | Visual database manager | Latest | FREE | https://www.mongodb.com/products/compass |
| Usage | | Browse data, create indexes | | | |
| | | | | | |
| **MongoDB Atlas GUI** | Web | Built into MongoDB Atlas | N/A | FREE | Dashboard built-in |
| | | Manage indexes, monitor performance | | | |

---

# 10. REAL-TIME COMMUNICATION

## **WebSocket Library**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Socket.IO** | WebSocket | Real-time bidirectional communication | ^4.7.2 | FREE | https://socket.io |
| Backend | | `socket.io` | ^4.7.2 | | |
| Frontend | | `socket.io-client` | ^4.7.2 | | |
| Install Backend | | `npm install socket.io` | | | |
| Install Frontend | | `npm install socket.io-client` | | | |
| Features | | Auto-reconnect, rooms, namespaces | | | |
| Usage | | Chat, notifications, live updates | | | |
| | | | | | |
| **ws** | Alternative | Native WebSocket library | ^8.14.2 | FREE | https://github.com/websockets/ws |
| | | Lightweight but less features | | | |
| Install | | `npm install ws` | | | |
| | | | | | |
| **Pusher** | Service | Hosted real-time service | N/A | PAID | https://pusher.com |
| Cost | | $20-2000/month depending on load | | | |
| Advantage | | Managed service, no server setup | | | |

---

# 11. VIDEO & AUDIO TECHNOLOGY

## **Video Calling Solutions (CHOOSE ONE)**

### **Option 1: Daily.co (RECOMMENDED FOR COLLEGE SGP)**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Daily.co SDK** | Video API | Complete video calling | Pay-as-you-go | https://www.daily.co |
| Frontend | | `@daily-co/daily-js` | ^0.24.1 | |
| Backend | | REST API | N/A | |
| Cost Model | | $0 - $0.04 per participant minute | | |
| Free Trial | | Yes, test for free | | |
| Install | | `npm install @daily-co/daily-js` | | |
| Difficulty | | ⭐⭐ (Very Easy) | | |
| Development Time | | 5 days | | |
| Why Choose | | Easiest implementation, reliable | | |

### **Option 2: Jitsi Meet (FREE & OPEN-SOURCE)**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Jitsi React SDK** | Video API | Open-source video conferencing | FREE | https://jitsi.org |
| Install | | `npm install @jitsi/react-sdk` | | |
| Difficulty | | ⭐⭐ (Easy) | | |
| Development Time | | 5-7 days | | |
| Cost | | Completely free (self-hosted) | | |
| Advantage | | Full control, no usage fees | | |

### **Option 3: WebRTC (NOT RECOMMENDED)**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **WebRTC** | Protocol | Raw peer-to-peer video | FREE | Browser native |
| Difficulty | | ⭐⭐⭐⭐⭐ (Extremely Hard) | | |
| Development Time | | 22 days | | |
| Hard Parts | | STUN/TURN servers, NAT traversal | | |
| Why NOT Use | | Too complex for college project | | |
| Server-Side | | Need custom signaling server | | |

## **Screen Sharing**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **WebRTC getDisplayMedia** | API | Screen sharing (browser native) | FREE | Browser API |
| Works With | | All video calling solutions | | |

## **Recording & Audio**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **MediaRecorder API** | Browser API | Record audio/video in browser | Native | FREE | Browser native |
| Support | | Works with WebRTC streams | | | |
| | | | | | |
| **node-media-server** | Backend | RTMP server for streaming | ^2.3.6 | FREE | https://github.com/illuspas/Node-Media-Server |
| Usage | | Alternative to browser recording | | | |
| | | | | | |
| **ffmpeg** | Tool | Video encoding & processing | Latest | FREE | https://ffmpeg.org |
| Install | | `npm install fluent-ffmpeg` | ^2.1.2 | | |
| Usage | | Convert, compress, encode recordings | | | |
| Backend | | Install ffmpeg on server | | | |
| | | | | | |
| **waveform-data** | Library | Audio visualization | ^3.3.1 | FREE | https://www.npmjs.com/package/waveform-data |
| Usage | | Show audio waveforms | | | |

---

# 12. PAYMENT PROCESSING

## **Payment Gateway**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Stripe** | Payment | Credit card processing | ^14.3.0 | FREEMIUM | https://stripe.com |
| Backend | | `stripe` SDK | | | |
| Frontend | | `@stripe/react-stripe-js` | ^2.4.0 | | |
| Cost Model | | 2.9% + $0.30 per transaction | | | |
| Free Testing | | Yes, test mode available | | | |
| Install Backend | | `npm install stripe` | | | |
| Install Frontend | | `npm install @stripe/react-stripe-js` | | | |
| Why Use | | Industry standard, most reliable | | | |
| | | | | | |
| **Razorpay** | Alternative | Indian payment gateway | ^2.9.2 | FREEMIUM | https://razorpay.com |
| Cost Model | | 2% for online payments | | | |
| Best For | | India-focused projects | | | |
| Install | | `npm install razorpay` | | | |
| | | | | | |
| **PayPal** | Alternative | PayPal Checkout | ^6.0.3 | FREEMIUM | https://developer.paypal.com |
| Cost Model | | 2.9% + $0.30 per transaction | | | |
| Install | | `npm install @paypal/checkout-server-sdk` | | | |
| | | | | | |
| **Square** | Alternative | Square Payments | N/A | FREEMIUM | https://squareup.com/us/en/developers |
| Cost Model | | 2.9% + $0.30 per transaction | | | |
| | | | | | |
| **2Checkout** | Alternative | Supports many countries | N/A | FREEMIUM | https://www.2checkout.com |
| | | Good international coverage | | | |

## **Payment Validation & Security**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **cvv.js** | Library | Validate credit card numbers | ^1.0.1 | FREE | https://www.npmjs.com/package/cvv.js |
| | | Basic card validation | | | |
| | | | | | |
| **credit-card-type** | Library | Detect card type | ^9.1.2 | FREE | https://github.com/braintree/credit-card-type |
| | | Visa, Mastercard detection | | | |

---

# 13. CLOUD STORAGE & CDN

## **Cloud Storage (For Recordings & Photos)**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **AWS S3** | Storage | Amazon Simple Storage Service | PAY-AS-YOU-GO | https://aws.amazon.com/s3 |
| Pricing | | $0.023 per GB stored, $0.09 per GB out | | |
| Free Tier | | 5GB storage, 20k GET requests/month | | |
| Install | | `npm install aws-sdk` | | |
| Usage | | Store tutor photos, recordings | | |
| Best For | | Large files, reliable | | |
| | | | | |
| **Firebase Storage** | Alternative | Google Cloud Storage | FREEMIUM | https://firebase.google.com |
| Pricing | | Free: 5GB, then $0.18/GB | | |
| Free Tier | | Sufficient for college project | | |
| Install | | `npm install firebase` | | |
| Advantage | | Easier setup than AWS S3 | | |
| | | | | |
| **Cloudinary** | Service | Image & video management | FREEMIUM | https://cloudinary.com |
| Pricing | | Free: 25GB storage | | |
| Features | | Auto-resize, compress, optimize | | |
| Install | | `npm install cloudinary` | | |
| Best For | | Automatic image optimization | | |
| | | | | |
| **Supabase** | Database + Storage | PostgreSQL + Storage | FREEMIUM | https://supabase.com |
| Pricing | | Free: 1GB storage | | |
| Install | | `npm install @supabase/supabase-js` | | |
| | | | | |
| **MinIO** | Self-Hosted | S3-compatible on your server | FREE | https://min.io |
| Setup | | More complex, full control | | |
| Cost | | Only server/bandwidth | | |

## **Content Delivery Network (CDN)**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Cloudflare** | CDN | Edge caching & DDoS protection | FREEMIUM | https://www.cloudflare.com |
| Free Plan | | Sufficient for this project | | |
| Features | | Caching, compression, SSL | | |
| Setup | | Update nameservers | | |
| | | | | |
| **AWS CloudFront** | CDN | Amazon's CDN | PAY-AS-YOU-GO | https://aws.amazon.com/cloudfront |
| Pricing | | $0.085 per GB | | |
| | | | | |
| **BunnyCDN** | CDN | Affordable CDN | $0.01 per GB | https://bunnycdn.com |
| Best For | | Budget-conscious projects | | |

---

# 14. AUTHENTICATION & SECURITY

## **JWT & Sessions**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **jsonwebtoken** | Library | Create/verify JWT tokens | ^9.1.2 | FREE | https://www.npmjs.com/package/jsonwebtoken |
| Usage | | Session management | | | |
| Install | | `npm install jsonwebtoken` | | | |
| | | | | | |
| **passport.js** | Strategy | Authentication strategies | ^0.7.0 | FREE | https://www.passportjs.org |
| Strategies | | Local, OAuth, Google, GitHub, etc | | | |
| Install | | `npm install passport` | | | |
| | | | | | |
| **next-auth** | Framework | Auth for Next.js projects | ^4.24.5 | FREE | https://next-auth.js.org |
| | | Built-in OAuth providers | | | |

## **Two-Factor Authentication (Optional)**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **speakeasy** | Library | TOTP generation | ^2.0.0 | FREE | https://www.npmjs.com/package/speakeasy |
| Usage | | Google Authenticator support | | | |
| Install | | `npm install speakeasy` | | | |
| | | | | | |
| **otplib** | Alternative | OTP libraries | ^12.11.1 | FREE | https://github.com/yeojz/otplib |
| | | TOTP/HOTP support | | | |

## **Input Validation & Sanitization**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **joi** | Validator | Powerful validation library | ^17.11.0 | FREE | https://joi.dev |
| Usage | | Validate API request data | | | |
| Install | | `npm install joi` | | | |
| | | | | | |
| **zod** | Alternative | TypeScript validation | ^3.22.4 | FREE | https://zod.dev |
| Why Use | | Type-safe validation | | | |
| Install | | `npm install zod` | | | |
| | | | | | |
| **express-validator** | Middleware | Validation middleware | ^7.0.0 | FREE | https://express-validator.github.io |
| Usage | | Express-integrated validation | | | |
| Install | | `npm install express-validator` | | | |
| | | | | | |
| **sanitize-html** | Sanitizer | Remove dangerous HTML | ^2.11.0 | FREE | https://www.npmjs.com/package/sanitize-html |
| Usage | | Prevent XSS in user content | | | |
| Install | | `npm install sanitize-html` | | | |
| | | | | | |
| **xss** | Sanitizer | XSS prevention | ^1.0.14 | FREE | https://www.npmjs.com/package/xss |
| | | Filter malicious input | | | |
| Install | | `npm install xss` | | | |

---

# 15. EMAIL & NOTIFICATIONS

## **Email Sending**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **nodemailer** | Library | Send emails via Node.js | ^6.9.7 | FREE | https://nodemailer.com |
| Setup | | Works with Gmail, SendGrid, etc | | | |
| Install | | `npm install nodemailer` | | | |
| | | | | | |
| **SendGrid** | Service | Professional email service | N/A | FREEMIUM | https://sendgrid.com |
| Free Tier | | 100 emails/day | | | |
| Paid | | $20/month starting | | | |
| | | | | | |
| **Resend** | Service | Modern email for developers | N/A | FREEMIUM | https://resend.com |
| Pricing | | Free for low volume, $0.0001 per email | | | |
| | | | | | |
| **Mailgun** | Service | Email API | N/A | FREEMIUM | https://www.mailgun.com |
| Free Tier | | 5,000 emails/month | | | |

## **Push Notifications**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Firebase Cloud Messaging** | Service | Google's push notification | N/A | FREEMIUM | https://firebase.google.com/products/cloud-messaging |
| Install | | `npm install firebase-admin` | ^12.0.0 | | |
| Cost | | Free | | | |
| | | | | | |
| **Pusher Channels** | Service | Push notifications | N/A | PAID | https://pusher.com |
| Cost | | $49/month starting | | | |

---

# 16. TESTING & DEBUGGING

## **Testing Frameworks**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Jest** | Test Framework | JavaScript testing | ^29.7.0 | FREE | https://jestjs.io |
| Usage | | Unit & integration tests | | | |
| Install | | `npm install --save-dev jest` | | | |
| | | | | | |
| **Vitest** | Modern Framework | Faster Jest alternative | ^1.0.0 | FREE | https://vitest.dev |
| Why Use | | Faster, ES modules native | | | |
| Install | | `npm install --save-dev vitest` | | | |
| | | | | | |
| **Mocha** | Framework | Traditional test framework | ^10.2.0 | FREE | https://mochajs.org |
| | | More flexible than Jest | | | |
| Install | | `npm install --save-dev mocha` | | | |

## **Testing Utilities**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **React Testing Library** | Library | Test React components | ^14.1.2 | FREE | https://testing-library.com/react |
| Why Use | | Test user interactions, not implementation | | | |
| Install | | `npm install --save-dev @testing-library/react` | | | |
| | | | | | |
| **@testing-library/jest-dom** | Library | Custom Jest matchers | ^6.1.5 | FREE | https://testing-library.com/jest-dom |
| Install | | `npm install --save-dev @testing-library/jest-dom` | | | |
| | | | | | |
| **Supertest** | Library | Test Express APIs | ^6.3.3 | FREE | https://github.com/visionmedia/supertest |
| Usage | | Test HTTP endpoints | | | |
| Install | | `npm install --save-dev supertest` | | | |
| | | | | | |
| **Chai** | Assertion | Assertion library | ^4.3.10 | FREE | https://www.chaijs.com |
| With Mocha | | Use for assertions in Mocha tests | | | |
| Install | | `npm install --save-dev chai` | | | |

## **End-to-End Testing**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Cypress** | E2E Framework | Modern end-to-end testing | ^13.6.2 | FREEMIUM | https://www.cypress.io |
| Why Use | | Easy to use, great UI | | | |
| Install | | `npm install --save-dev cypress` | | | |
| | | | | | |
| **Playwright** | Alternative | Cross-browser testing | ^1.40.1 | FREE | https://playwright.dev |
| Why Use | | Faster, better multi-browser support | | | |
| Install | | `npm install --save-dev playwright` | | | |

## **Debugging Tools**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Node Inspector** | Built-in | Debug Node.js | Native | FREE | Node.js native |
| Usage | | Chrome DevTools for backend | | | |
| | | | | | |
| **Debug** | Library | Simple logging library | ^4.3.4 | FREE | https://www.npmjs.com/package/debug |
| Install | | `npm install debug` | | | |
| Usage | | Conditional logging for debugging | | | |

## **Code Quality & Linting**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **ESLint** | Linter | Find & fix JavaScript issues | ^8.52.0 | FREE | https://eslint.org |
| Install | | `npm install --save-dev eslint` | | | |
| Config | | `.eslintrc.json` | | | |
| | | | | | |
| **Prettier** | Formatter | Code formatter | ^3.1.0 | FREE | https://prettier.io |
| Install | | `npm install --save-dev prettier` | | | |
| Why Use | | Consistent code style | | | |
| | | | | | |
| **stylelint** | Linter | CSS/SCSS linter | ^16.0.2 | FREE | https://stylelint.io |
| Install | | `npm install --save-dev stylelint` | | | |
| | | | | | |
| **SonarQube** | Analysis | Code quality analysis | N/A | FREEMIUM | https://www.sonarqube.org |
| Free Version | | Community edition available | | | |

---

# 17. DEPLOYMENT & DEVOPS

## **Frontend Hosting**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Vercel** | Hosting | Optimized for React/Next.js | FREEMIUM | https://vercel.com |
| Free Tier | | Unlimited projects & deployments | | |
| Cost | | Free for hobby, $20+/month for pro | | |
| Setup | | Connect GitHub, auto-deploy | | |
| Why Use | | Built for React, instant HTTPS | | |
| | | | | |
| **Netlify** | Alternative | Similar to Vercel | FREEMIUM | https://www.netlify.com |
| Free Tier | | Unlimited deployments | | |
| Features | | Serverless functions, form handling | | |
| | | | | |
| **GitHub Pages** | Free | Simple static hosting | FREE | https://pages.github.com |
| Best For | | Portfolio projects | | |
| Limitation | | No backend support | | |
| | | | | |
| **AWS Amplify** | Enterprise | AWS's hosting service | FREEMIUM | https://aws.amazon.com/amplify |
| Cost | | Free tier available | | |

## **Backend Hosting**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Render** | Hosting | Easy Node.js deployment | FREEMIUM | https://render.com |
| Free Tier | | Web services with 750 hours/month | | |
| Cost | | $7/month minimum for paid | | |
| Setup | | Connect GitHub, auto-deploy | | |
| Why Use | | Simple, reliable, free tier good | | |
| | | | | |
| **Railway** | Modern | Developer-friendly hosting | FREEMIUM | https://railway.app |
| Free Tier | | $5/month free credits | | |
| Setup | | Connect repo, instant deploy | | |
| | | | | |
| **Heroku** | Classic | Traditional Node.js hosting | PAID | https://www.heroku.com |
| Status | | Free tier discontinued (2022) | | |
| Cost | | $7/month minimum | | |
| | | | | |
| **DigitalOcean** | VPS | Virtual private server | $4-6/month | https://www.digitalocean.com |
| Best For | | More control, traditional deployment | | |
| Difficulty | | Need Linux/server knowledge | | |
| | | | | |
| **AWS EC2** | Cloud | Elastic Compute Cloud | PAY-AS-YOU-GO | https://aws.amazon.com/ec2 |
| Free Tier | | 750 hours/month first year | | |
| Difficulty | | Complex setup, powerful | | |

## **Process Management (Production)**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **PM2** | Manager | Process manager for Node.js | ^5.3.0 | FREE | https://pm2.keymetrics.io |
| Usage | | Keep app running, auto-restart | | | |
| Install | | `npm install -g pm2` | | | |
| Commands | | `pm2 start app.js`, `pm2 restart` | | | |
| | | | | | |
| **Forever** | Alternative | Simple process manager | ^4.0.3 | FREE | https://github.com/foreversd/forever |
| | | Simpler than PM2 | | | |

## **Docker (Optional but Recommended)**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **Docker** | Containerization | Container your application | Latest | FREE | https://www.docker.com |
| Why Use | | Consistent dev/prod environments | | | |
| Install | | Download Docker Desktop | | | |
| | | | | | |
| **Docker Compose** | Orchestration | Run multiple containers | Latest | FREE | Docker built-in |
| Usage | | Database + App together | | | |
| | | | | | |
| **Dockerfile** | Config | Build container image | N/A | FREE | Standard format |
| Usage | | Define app container | | | |

## **CI/CD Pipelines**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **GitHub Actions** | CI/CD | GitHub built-in automation | FREE | https://github.com/features/actions |
| Free Tier | | 2000 minutes/month | | |
| Usage | | Auto-test, deploy on push | | |
| | | | | |
| **GitLab CI/CD** | Alternative | GitLab's pipeline | FREEMIUM | https://docs.gitlab.com/ee/ci |
| Free Tier | | 400 minutes/month | | |
| | | | | |
| **CircleCI** | Service | Dedicated CI/CD | FREEMIUM | https://circleci.com |
| Free Tier | | 6000 credits/month | | |
| | | | | |
| **Jenkins** | Self-Hosted | Open-source CI/CD | FREE | https://www.jenkins.io |
| Setup | | Complex but powerful | | |

---

# 18. MONITORING & ANALYTICS

## **Error Tracking**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Sentry** | Error Tracking | Real-time error monitoring | FREEMIUM | https://sentry.io |
| Free Tier | | 5,000 errors/month | | |
| Install | | `npm install @sentry/node` | | |
| Why Use | | Catch production errors early | | |
| | | | | |
| **Rollbar** | Alternative | Error tracking platform | FREEMIUM | https://rollbar.com |
| Cost | | Free: 5,000 errors/month | | |
| | | | | |
| **LogRocket** | Session Replay | Record user sessions | FREEMIUM | https://logrocket.com |
| Free Tier | | Limited recordings | | |

## **Analytics & Monitoring**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Google Analytics** | Analytics | Website traffic tracking | FREE | https://analytics.google.com |
| Install | | `npm install react-ga4` | | |
| Usage | | Track user behavior | | |
| | | | | |
| **Mixpanel** | Analytics | Event-based analytics | FREEMIUM | https://mixpanel.com |
| Cost | | Free: 1,000 events/day | | |
| | | | | |
| **Vercel Analytics** | Built-in | Analytics if using Vercel | PAID | Built into Vercel |
| Cost | | $9-25/month | | |
| | | | | |
| **Datadog** | Monitoring | Full-stack monitoring | PAID | https://www.datadoghq.com |
| Free Trial | | 14 days free | | |
| Cost | | Enterprise pricing | | |

## **Performance Monitoring**
| Tool | Type | Purpose | Version | Cost | Link |
|--------|------|---------|---------|------|------|
| **web-vitals** | Library | Core Web Vitals tracking | ^3.4.0 | FREE | https://www.npmjs.com/package/web-vitals |
| Install | | `npm install web-vitals` | | | |
| Usage | | Monitor page performance | | | |
| | | | | | |
| **Lighthouse** | Tool | Website audit tool | Built-in | FREE | Browser native |
| Usage | | Performance, accessibility, SEO | | | |

---

# 19. DEVELOPMENT ENVIRONMENT

## **Code Editors**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Visual Studio Code** | Editor | Best code editor | FREE | https://code.visualstudio.com |
| Recommended Extensions | | ESLint, Prettier, Thunder Client | | |
| Why Use | | Most popular, huge extension library | | |
| | | | | |
| **WebStorm** | IDE | Full IDE from JetBrains | PAID | https://www.jetbrains.com/webstorm |
| Cost | | $12.90/month | | |
| | | | | |
| **Vim/Neovim** | Editor | Terminal-based editor | FREE | https://www.vim.org |
| Difficulty | | Steep learning curve | | |

## **VS Code Extensions (Recommended)**
| Extension | Purpose | Link |
|-----------|---------|------|
| ESLint | Linting in editor | https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint |
| Prettier | Code formatting | https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode |
| Thunder Client | API testing (like Postman) | https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client |
| MongoDB for VS Code | MongoDB GUI | https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode |
| GitLens | Git integration | https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens |
| Tailwind CSS IntelliSense | Tailwind autocomplete | https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss |
| REST Client | Test APIs | https://marketplace.visualstudio.com/items?itemName=humao.rest-client |

## **API Testing Tools**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **Postman** | API Testing | Test HTTP endpoints | FREEMIUM | https://www.postman.com |
| Free Plan | | Sufficient for college | | |
| Install | | Download app | | |
| | | | | |
| **Thunder Client** | Alternative | Lightweight in VS Code | FREE | VS Code extension |
| Why Use | | Simpler than Postman | | |
| | | | | |
| **Insomnia** | Alternative | REST & GraphQL client | FREE/PAID | https://insomnia.rest |
| | | Good UI, open-source | | |

## **Database Tools**
| Tool | Type | Purpose | Cost | Link |
|--------|------|---------|------|------|
| **MongoDB Compass** | GUI | MongoDB visual manager | FREE | https://www.mongodb.com/products/compass |
| Download | | Desktop app | | |
| | | | | |
| **MongoDB Atlas Web** | Web UI | Built into MongoDB Atlas | FREE | Dashboard |
| | | Browser-based management | | |
| | | | | |
| **DBeaver** | Universal | Database manager (supports many DBs) | FREEMIUM | https://dbeaver.io |
| Free Version | | Sufficient for this project | | |

---

# 20. COMPLETE INSTALLATION COMMANDS

## **Complete Setup from Scratch**

### **1. Initial Project Setup**
```bash
# Create folder
mkdir tutoring-marketplace
cd tutoring-marketplace

# Initialize git
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# Create directories
mkdir frontend backend
```

### **2. Frontend Setup**
```bash
cd frontend

# Create Vite + React project
npm create vite@latest . -- --template react

# Install all frontend dependencies
npm install react-router-dom
npm install axios @tanstack/react-query
npm install react-hook-form zod
npm install @headlessui/react @heroicons/react
npm install react-icons
npm install socket.io-client
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction
npm install date-fns
npm install react-toastify
npm install zustand
npm install tailwindcss postcss autoprefixer
npm install -D tailwindcss-animate

# Install dev dependencies
npm install --save-dev eslint prettier
npm install --save-dev @testing-library/react vitest
npm install --save-dev tailwind-merge clsx

# If using Daily.co
npm install @daily-co/daily-js

# If using Stripe
npm install @stripe/react-stripe-js stripe

# Create Tailwind config
npx tailwindcss init -p

# Start dev server
npm run dev
```

### **3. Backend Setup**
```bash
cd ../backend

# Initialize Node project
npm init -y

# Install backend dependencies
npm install express cors helmet
npm install mongoose
npm install dotenv
npm install jsonwebtoken bcrypt
npm install nodemailer
npm install socket.io
npm install stripe
npm install aws-sdk  # For S3
npm install axios
npm install express-async-errors
npm install morgan compression
npm install joi express-validator
npm install uuid
npm install multer sharp

# Install dev dependencies
npm install --save-dev nodemon
npm install --save-dev jest supertest
npm install --save-dev eslint prettier

# If using Firebase
npm install firebase-admin

# If using daily.co (backend)
npm install @daily-co/daily-js

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_...
STRIPE_PUBLISHABLE_KEY=pk_...
NODEMAILER_EMAIL=your@gmail.com
NODEMAILER_PASSWORD=app_password
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=yyy
AWS_REGION=us-east-1
DAILY_API_KEY=xxx" > .env

# Start dev server
npm run dev
```

### **4. Database Setup**
```bash
# Go to MongoDB Atlas: https://www.mongodb.com/cloud/atlas
# 1. Create account
# 2. Create project
# 3. Create cluster (choose free tier)
# 4. Create database user
# 5. Get connection string
# 6. Put in .env as MONGODB_URI
```

### **5. Full Stack Installation (All at Once)**

```bash
# Frontend
npm install react-router-dom axios @tanstack/react-query react-hook-form zod @headlessui/react react-icons socket.io-client @fullcalendar/react @fullcalendar/daygrid date-fns react-toastify zustand @stripe/react-stripe-js stripe @daily-co/daily-js

# Backend  
npm install express cors helmet mongoose dotenv jsonwebtoken bcrypt nodemailer socket.io stripe aws-sdk axios multer sharp uuid firebase-admin joi

# Dev Tools (Frontend)
npm install --save-dev eslint prettier @testing-library/react vitest tailwindcss postcss autoprefixer

# Dev Tools (Backend)
npm install --save-dev nodemon jest supertest eslint prettier

# Create config files
npx tailwindcss init -p
npx eslint --init
```

---

## **Quick Reference - Tech Stack Summary**

| Layer | Technology | Version | Install Command |
|-------|-----------|---------|-----------------|
| **Runtime** | Node.js | 18.0+ | Download from nodejs.org |
| **Frontend Framework** | React.js | 18.2+ | `npx create-vite` |
| **Build Tool** | Vite | 5.0+ | `npm install -D vite` |
| **CSS Framework** | Tailwind CSS | 3.3+ | `npm install -D tailwindcss` |
| **Backend Framework** | Express.js | 4.18+ | `npm install express` |
| **Database** | MongoDB | Latest | Create at mongodb.com/atlas |
| **ODM** | Mongoose | 8.0+ | `npm install mongoose` |
| **Auth** | JWT + bcrypt | 9.1.2, 5.1.1 | `npm install jsonwebtoken bcrypt` |
| **Real-Time** | Socket.IO | 4.7+ | `npm install socket.io socket.io-client` |
| **Video Calling** | Daily.co | 0.24+ | `npm install @daily-co/daily-js` |
| **Payments** | Stripe | 14.0+ | `npm install stripe` |
| **Storage** | AWS S3 | Latest | `npm install aws-sdk` |
| **Frontend Hosting** | Vercel | N/A | Deploy at vercel.com |
| **Backend Hosting** | Render | N/A | Deploy at render.com |
| **Testing** | Jest + Vitest | 29.0+, 1.0+ | `npm install --save-dev jest vitest` |
| **Linting** | ESLint + Prettier | 8.5+, 3.1+ | `npm install --save-dev eslint prettier` |

---

**Total Dependencies: ~80+ libraries**
**Estimated Total Installation Size: ~500MB - 1GB**
**Setup Time: 2-3 hours for complete setup**

Good luck! 🚀
