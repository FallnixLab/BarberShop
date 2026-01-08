# RazorWorks Barbershop

Modern barbershop website with booking system built with React.js

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Booking System** - Interactive appointment booking with step-by-step process
- **Modern UI** - Clean design with smooth animations using Framer Motion
- **Mobile-First** - Touch-friendly interface with hamburger menu
- **Service Management** - Display services, masters, and pricing
- **Contact Information** - Location, hours, and contact details

## Tech Stack

- **React.js** - Frontend framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Date-fns** - Date manipulation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/razorworks-barbershop.git
cd razorworks-barbershop
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/
│   ├── Booking/          # Booking system components
│   └── Layout/           # Layout components (Header, Sidebar, Footer)
├── context/              # React Context for state management
├── data/                 # Static data (services, masters, etc.)
├── pages/                # Page components
├── styles/               # Global styles
└── App.js               # Main application component
```

## Booking System

The booking system includes:
- Service selection
- Master selection
- Date and time selection
- Booking confirmation

All steps flow automatically without manual navigation buttons.

## Responsive Design

- **Desktop**: Full sidebar with booking panel
- **Tablet**: Collapsible sidebar with responsive layout
- **Mobile**: Hamburger menu with full-screen booking

## License

This project is licensed under the MIT License.

## Development

Created by [FallnixLab](https://fallnixlab.ru) - Web Development Studio