-- Create player_statistics table for NBA player data
CREATE TABLE IF NOT EXISTS player_statistics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  games_played INTEGER DEFAULT 0,
  minutes_per_game DECIMAL(5,2) DEFAULT 0,
  points_per_game DECIMAL(5,2) DEFAULT 0,
  rebounds_per_game DECIMAL(5,2) DEFAULT 0,
  assists_per_game DECIMAL(5,2) DEFAULT 0,
  steals_per_game DECIMAL(5,2) DEFAULT 0,
  blocks_per_game DECIMAL(5,2) DEFAULT 0,
  field_goal_percentage DECIMAL(5,3) DEFAULT 0,
  three_point_percentage DECIMAL(5,3) DEFAULT 0,
  free_throw_percentage DECIMAL(5,3) DEFAULT 0,
  true_shooting_percentage DECIMAL(5,3) DEFAULT 0,
  player_efficiency_rating DECIMAL(5,2) DEFAULT 0,
  usage_rate DECIMAL(5,2) DEFAULT 0,
  season TEXT NOT NULL DEFAULT '2023-24',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREate INDEX IF NOT EXISTS idx_player_statistics_player_name ON player_statistics(player_name);
CREATE INDEX IF NOT EXISTS idx_player_statistics_team ON player_statistics(team);
CREATE INDEX IF NOT EXISTS idx_player_statistics_position ON player_statistics(position);
CREATE INDEX IF NOT EXISTS idx_player_statistics_season ON player_statistics(season);

-- Create user_comparisons table to track user's player comparisons
CREATE TABLE IF NOT EXISTS user_comparisons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  comparison_name TEXT,
  player_ids UUID[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for user comparisons
CREATE INDEX IF NOT EXISTS idx_user_comparisons_user_id ON user_comparisons(user_id);

-- Insert sample player data
INSERT INTO player_statistics (
  player_name, team, position, games_played, minutes_per_game, points_per_game, 
  rebounds_per_game, assists_per_game, steals_per_game, blocks_per_game,
  field_goal_percentage, three_point_percentage, free_throw_percentage,
  true_shooting_percentage, player_efficiency_rating, usage_rate
) VALUES 
('LeBron James', 'LAL', 'SF', 71, 35.3, 25.7, 7.3, 8.3, 1.3, 0.5, 0.540, 0.410, 0.750, 0.630, 28.5, 31.2),
('Giannis Antetokounmpo', 'MIL', 'PF', 73, 35.2, 31.1, 11.5, 5.7, 1.2, 1.1, 0.553, 0.274, 0.645, 0.610, 32.1, 36.8),
('Stephen Curry', 'GSW', 'PG', 74, 32.7, 26.4, 4.5, 5.1, 0.9, 0.4, 0.427, 0.407, 0.915, 0.600, 23.8, 29.5),
('Luka Doncic', 'DAL', 'PG', 70, 36.2, 32.4, 8.6, 9.1, 1.4, 0.5, 0.487, 0.384, 0.786, 0.610, 30.2, 36.0),
('Nikola Jokic', 'DEN', 'C', 79, 34.6, 26.4, 12.4, 9.0, 1.3, 0.9, 0.583, 0.356, 0.820, 0.650, 29.8, 27.3);

-- Enable Row Level Security
ALTER TABLE player_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_comparisons ENABLE ROW LEVEL SECURITY;

-- Create policies for player_statistics (public read access)
CREATE POLICY "Player statistics are viewable by everyone" 
ON player_statistics FOR SELECT 
USING (true);

-- Create policies for user_comparisons (users can only access their own)
CREATE POLICY "Users can view their own comparisons" 
ON user_comparisons FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own comparisons" 
ON user_comparisons FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comparisons" 
ON user_comparisons FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comparisons" 
ON user_comparisons FOR DELETE 
USING (auth.uid() = user_id);