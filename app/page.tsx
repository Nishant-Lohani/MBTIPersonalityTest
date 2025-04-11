import Link from 'next/link';
import { Brain, Users, ChartBar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Discover Your MBTI Personality Type
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand yourself better through our scientifically-based personality assessment. Join millions who have uncovered their true personality type.
          </p>
          <Link href="/test" className="inline-block mt-8">
            <Button size="lg" className="text-lg">
              Start Free Test
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Scientific Approach</h3>
            <p className="text-muted-foreground">Based on Carl Jung's theory of psychological types and modern research.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Millions Tested</h3>
            <p className="text-muted-foreground">Join a global community of individuals seeking self-discovery.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <ChartBar className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Detailed Results</h3>
            <p className="text-muted-foreground">Get comprehensive insights into your personality type.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <BookOpen className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
            <p className="text-muted-foreground">Learn how to leverage your strengths and work on your weaknesses.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to discover yourself?</h2>
          <p className="text-muted-foreground mb-8">
            Take our free personality test and get a detailed report about your personality type.
          </p>
          <Link href="/test" className="inline-block">
            <Button variant="outline" size="lg">
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}