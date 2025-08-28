# Agents Context Document

## Project Overview
This project is a **Font Creation Web App** built with **Next.js frontend** and a separate backend (Node/Express planned).  
The frontend landing page is already implemented (styled similar to Resend.com using Chakra UI).  
Next stages focus on **user dashboard, font creation workflow, and AI-assisted generation**.

---

## Goals
- Allow users to create **custom fonts from handwriting samples**.
- Provide a **seamless flow**: login → dashboard → handwriting input → AI processing → preview → export.
- Ensure the experience is **modern, minimal, and user-friendly** with retry/edit functionality.

---

## Current Status
- ✅ Landing page sections completed.
- ⬜ Authentication (Sign in / Sign up).
- ⬜ Dashboard setup.
- ⬜ Handwriting input workflow.
- ⬜ AI font processing (letters, numbers, symbols).
- ⬜ Export to `.ttf` or similar format.

---

## Landing Page (Already Done)
- Hero section: headline, subtext, CTA.
- Features section: key value propositions.
- CTA banner: signup prompt.
- Footer: basic links.

---

## Dashboard (To Implement)
### Sections:
- **Navigation Sidebar / Topbar**
  - Links: Dashboard, Create Font, My Fonts, Settings, Logout.
- **Main Dashboard**
  - Welcome message
  - Recent activity or fonts preview

---

## Font Creation Flow
### Input Process
1. **Alphabet Collection**
   - The phrase `"The quick brown fox jumps over the lazy dog"` appears word-by-word.
   - Each letter is shown in a **separate box** where the user draws it.
   - User completes the full alphabet A–Z via this phrase.

2. **Numbers Collection**
   - User writes numbers **1 to 5** in boxes.
   - AI extrapolates **6–9 and 0** automatically.

3. **Symbols Prediction**
   - AI predicts symbols (.,!?@#$ etc.) based on handwriting style.
   - User can manually redraw/edit any symbol.

### Editing
- Grid view of all letters, numbers, symbols.
- Options per character: **Retry, Redraw, Edit**.
- Loading and progress indicators throughout.

### Preview & Export
- Once done, AI assembles handwriting into a preview font.
- User can:
  - Test typing with the new font.
  - Export/download as `.ttf`.

---

## Navigation & Routing
- `/` → Landing Page
- `/auth` → Sign in / Sign up
- `/dashboard` → User dashboard
- `/create` → Font creation workflow
- `/fonts/[id]` → View / Edit specific font
- `/settings` → Profile & preferences

---

## Features Checklist
- [x] Landing page built
- [ ] Authentication (Auth UI + backend integration)
- [ ] Dashboard structure
- [ ] Handwriting input boxes
- [ ] Phrase-based alphabet capture
- [ ] Numbers extrapolation (1–5 input → 6–0 AI generated)
- [ ] Symbols prediction
- [ ] Grid editing UI
- [ ] Font preview & test typing
- [ ] Export as `.ttf`
- [ ] Retry/redraw UX improvements
- [ ] Loading & progress states

---

## Notes
- Focus is on **simple user-friendly flow**.
- **Parameter adjustments** for generated fonts are minimal (keep UI uncluttered).
- AI fills in missing glyphs (numbers, symbols).
- User always has option to retry or override AI-generated glyphs.

---

## Technical Architecture

### Frontend Structure
```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Landing page
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # User dashboard
│   │   ├── create/         # Font creation workflow
│   │   ├── fonts/          # Font management
│   │   └── settings/       # User settings
│   ├── components/         # Reusable components
│   │   ├── ui/            # Basic UI components
│   │   ├── forms/         # Form components
│   │   ├── canvas/        # Drawing canvas components
│   │   └── layout/        # Layout components
│   ├── lib/               # Utilities and helpers
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript type definitions
```

### Key Components to Build
1. **Authentication Components**
   - Sign in/up forms
   - Password reset
   - OAuth integration (optional)

2. **Dashboard Components**
   - Navigation sidebar/topbar
   - Welcome section
   - Recent fonts grid
   - Quick actions

3. **Font Creation Components**
   - Drawing canvas with grid
   - Character input boxes
   - Progress indicators
   - Preview panel

4. **Font Management Components**
   - Font gallery
   - Edit/delete options
   - Export functionality

### State Management
- User authentication state
- Font creation progress
- Current drawing session
- Font preview data

### API Integration Points
- User authentication
- Font data storage
- AI processing endpoints
- Export generation

---

## Design Principles
- **Minimalist UI**: Clean, uncluttered interface
- **Progressive Disclosure**: Show complexity only when needed
- **Immediate Feedback**: Real-time updates and progress
- **Error Recovery**: Easy retry and edit options
- **Mobile First**: Responsive design for all devices

---

## User Experience Flow
1. **Landing** → User sees value proposition
2. **Sign Up** → Simple registration process
3. **Dashboard** → Welcome and quick start
4. **Create Font** → Guided handwriting collection
5. **Preview** → Test and refine font
6. **Export** → Download and use

---

## Success Metrics
- User completion rate through font creation
- Time to create first font
- Font quality and usability
- User retention and repeat usage
- Export and sharing frequency
