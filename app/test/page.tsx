'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const questions = [
  {
    id: 1,
    text: "How do you prefer to spend your free time?",
    options: [
      { value: "E", text: "Going out with friends and meeting new people" },
      { value: "E", text: "Attending events and social gatherings" },
      { value: "I", text: "Reading a book or watching a movie alone" },
      { value: "I", text: "Spending time reflecting or journaling" }
    ],
    dimension: "EI"
  },
  {
    id: 2,
    text: "When making decisions, what do you rely on more?",
    options: [
      { value: "T", text: "Objective facts and logical analysis" },
      { value: "T", text: "Consistency and rational reasoning" },
      { value: "F", text: "Personal values and ethics" },
      { value: "F", text: "How decisions affect others emotionally" }
    ],
    dimension: "TF"
  },
  {
    id: 3,
    text: "How do you prefer to plan your day?",
    options: [
      { value: "J", text: "Creating a detailed schedule ahead of time" },
      { value: "J", text: "Checking things off a structured to-do list" },
      { value: "P", text: "Going with the flow and seeing how the day unfolds" },
      { value: "P", text: "Leaving room for spontaneous opportunities" }
    ],
    dimension: "JP"
  },
  {
    id: 4,
    text: "When learning something new, what interests you more?",
    options: [
      { value: "S", text: "Hands-on experience and real-world examples" },
      { value: "S", text: "Facts, figures, and measurable outcomes" },
      { value: "N", text: "Theoretical frameworks and patterns" },
      { value: "N", text: "Imagining future implications and big ideas" }
    ],
    dimension: "SN"
  },
  {
    id: 5,
    text: "In group discussions, how do you typically participate?",
    options: [
      { value: "E", text: "Speaking up often to contribute ideas" },
      { value: "E", text: "Leading the conversation and engaging others" },
      { value: "I", text: "Listening thoughtfully and chiming in occasionally" },
      { value: "I", text: "Reflecting internally before sharing thoughts" }
    ],
    dimension: "EI"
  },
  {
    id: 6,
    text: "When solving problems, do you prefer to:",
    options: [
      { value: "S", text: "Use methods proven to work in the past" },
      { value: "S", text: "Break the problem down into concrete steps" },
      { value: "N", text: "Brainstorm new and original approaches" },
      { value: "N", text: "See how it fits into a larger system or concept" }
    ],
    dimension: "SN"
  },
  {
    id: 7,
    text: "In conflicts, what's more important to you?",
    options: [
      { value: "T", text: "Finding the most fair and logical outcome" },
      { value: "T", text: "Sticking to principles regardless of feelings" },
      { value: "F", text: "Ensuring everyone feels heard and respected" },
      { value: "F", text: "Creating harmony and avoiding hurt feelings" }
    ],
    dimension: "TF"
  },
  {
    id: 8,
    text: "How do you prefer your work environment?",
    options: [
      { value: "J", text: "Clear structure, deadlines, and expectations" },
      { value: "J", text: "Orderly processes and long-term plans" },
      { value: "P", text: "Flexible deadlines and open-ended tasks" },
      { value: "P", text: "Adapting as things come up throughout the day" }
    ],
    dimension: "JP"
  },
  {
    id: 9,
    text: "When attending events, do you prefer to:",
    options: [
      { value: "E", text: "Mingle and meet lots of new people" },
      { value: "E", text: "Keep energy high through active socializing" },
      { value: "I", text: "Stick with familiar faces in smaller groups" },
      { value: "I", text: "Observe and absorb the environment quietly" }
    ],
    dimension: "EI"
  },
  {
    id: 10,
    text: "When working on a project, what's your focus?",
    options: [
      { value: "S", text: "Paying close attention to detail" },
      { value: "S", text: "Staying practical and grounded" },
      { value: "N", text: "Innovating and experimenting" },
      { value: "N", text: "Visualizing the future impact" }
    ],
    dimension: "SN"
  },
  {
    id: 11,
    text: "When giving feedback, what's your approach?",
    options: [
      { value: "T", text: "Being clear and fact-based" },
      { value: "T", text: "Addressing the issue directly" },
      { value: "F", text: "Framing criticism constructively" },
      { value: "F", text: "Balancing honesty with encouragement" }
    ],
    dimension: "TF"
  },
  {
    id: 12,
    text: "How do you handle deadlines?",
    options: [
      { value: "J", text: "Finishing early to stay ahead" },
      { value: "J", text: "Planning backwards from due dates" },
      { value: "P", text: "Letting inspiration guide the process" },
      { value: "P", text: "Working intensely as the deadline nears" }
    ],
    dimension: "JP"
  }
];

const personalityDescriptions = {
  E: "Extroverted - You gain energy from social interactions and prefer external engagement",
  I: "Introverted - You recharge through solitary activities and value deep reflection",
  S: "Sensing - You focus on concrete facts, details, and practical applications",
  N: "Intuitive - You prefer abstract concepts, patterns, and future possibilities",
  T: "Thinking - You make decisions based on logic, analysis, and objective criteria",
  F: "Feeling - You make decisions based on values, harmony, and personal impact",
  J: "Judging - You prefer structure, planning, and clear organization",
  P: "Perceiving - You value flexibility, adaptability, and spontaneity"
};

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [personalityType, setPersonalityType] = useState('');

  const calculatePersonalityType = () => {
    const dimensions = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    Object.values(answers).forEach(answer => {
      dimensions[answer as keyof typeof dimensions]++;
    });

    const type = [
      dimensions.E > dimensions.I ? 'E' : 'I',
      dimensions.S > dimensions.N ? 'S' : 'N',
      dimensions.T > dimensions.F ? 'T' : 'F',
      dimensions.J > dimensions.P ? 'J' : 'P'
    ].join('');

    return type;
  };


  const handleAnswer = async (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const type = calculatePersonalityType();
      setPersonalityType(type);
      setShowResults(true);
      // await saveResults(type);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Your MBTI Type: {personalityType}</h1>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Based on your answers, you are a {personalityType} type. Here's what each letter in your type means:
              </p>
              <div className="space-y-4">
                {Array.from(personalityType).map((letter, index) => (
                  <div key={index} className="bg-card/50 p-4 rounded-lg">
                    <p className="text-lg">{personalityDescriptions[letter as keyof typeof personalityDescriptions]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Button
                  className="w-full"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setShowResults(false);
                  }}
                >
                  Take Test Again
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.print()}
                >
                  Print Results
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <div className="mb-8">
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">
            {questions[currentQuestion].text}
          </h2>

          <RadioGroup
            className="space-y-4"
            onValueChange={handleAnswer}
            defaultValue={answers[currentQuestion.toString()]}
            >
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-lg">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>
      </div>
    </div>
  );
}
