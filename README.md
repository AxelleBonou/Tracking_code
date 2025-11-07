# Western Union - Track a Transfer

This is a [Next.js](https://nextjs.org) project replicating the Western Union "Track a Transfer" page with a clean, maintainable structure.

## Project Structure

```
wersternunion/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main Track Transfer page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site icon
├── components/
│   ├── Header.tsx          # Navigation header component
│   ├── Footer.tsx          # Footer with links
│   └── TrackingForm.tsx    # Track transfer form component
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Features

- ✅ Clean component-based architecture
- ✅ Responsive design matching Western Union's UI
- ✅ Track transfer form with sender/receiver tabs
- ✅ MTCN tracking number input (10 digits)
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx` or the components in the `components/` folder.

## Components

### Header
- Western Union logo and branding
- Navigation links (Send money, Track transfer, Find locations)
- Login/Register buttons

### TrackingForm
- Sender/Receiver tabs
- 10-digit MTCN input field
- Continue button
- "Don't know the MTCN?" link

### Footer
- Corporate links
- Legal information
- Contact and support links

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: 19.2

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
