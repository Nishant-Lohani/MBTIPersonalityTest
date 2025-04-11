/*
  # Create tables for MBTI test results

  1. New Tables
    - `test_results`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `personality_type` (text)
      - `answers` (jsonb)
      - `user_id` (uuid, optional, for authenticated users)

  2. Security
    - Enable RLS
    - Allow anonymous users to create results
    - Allow authenticated users to view their own results
*/

CREATE TABLE IF NOT EXISTS test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  personality_type text NOT NULL,
  answers jsonb NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to create results
CREATE POLICY "Anyone can create test results"
  ON test_results
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow users to read their own results
CREATE POLICY "Users can read own results"
  ON test_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);