# NBA Playoffs Predictions for Prop Betz

A comprehensive statistical analysis tool for NBA player comparisons and performance insights, designed to help with prop betting decisions.

## Features

- **Player Statistical Comparisons**: Compare multiple NBA players across various performance metrics
- **Season Averages & Trends**: Analyze current season data and performance patterns  
- **Advanced Analytics**: Calculate PER, TS%, usage rate, and other advanced metrics
- **Visual Data Representation**: Interactive charts and graphs for performance data
- **Smart Search & Filtering**: Find players by position, team, or performance criteria
- **User Authentication**: Secure login and personalized dashboards

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication & Database**: Supabase
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nba-playoffs-predictions
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Run the database migrations:
```bash
# In your Supabase dashboard SQL editor, run the migration file:
# supabase/migrations/001_initial.sql
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses two main tables:

- `player_statistics`: Stores NBA player performance data and advanced metrics
- `user_comparisons`: Tracks user-created player comparisons and saved analyses

## Features Overview

### Current Implementation

- User authentication (signup/login/logout)
- Responsive landing page with feature highlights
- Protected dashboard with navigation
- Database schema for player statistics and user data
- Sample NBA player data

### Planned Features

- Interactive player comparison interface
- Advanced statistical calculations (PER, TS%, etc.)
- Visual charts and performance graphs
- Real-time season data integration
- Export functionality for analysis results
- Mobile-responsive design improvements

## Target Users

- NBA fans seeking detailed player insights
- Fantasy basketball players
- Sports analysts and coaches
- Basketball enthusiasts interested in data-driven analysis
- Prop bettors looking for statistical advantages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.