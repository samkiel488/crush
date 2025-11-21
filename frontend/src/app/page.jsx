"use client";

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { useTheme } from '../utils/theme';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-base-content py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="absolute top-4 right-4 z-10">
            <select
              className="select select-bordered select-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="eye-care">Eye-Care</option>
            </select>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            DEVOUR TO CRUSH
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your ultimate JAMB exam preparation platform. Master the questions,
            crush the exam, and secure your future.
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/register"
              className="btn btn-primary px-8 py-3 font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="/community"
              className="btn btn-secondary px-8 py-3 font-semibold"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DEVOUR TO CRUSH?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Question Bank</h3>
              <p className="text-base-content/70">
                Access thousands of JAMB questions across all subjects with detailed explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exam Simulator</h3>
              <p className="text-base-content/70">
                Practice under real exam conditions with timed mock tests and performance analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-base-content/70">
                Monitor your progress, identify weak areas, and track your improvement over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-base-content/70">Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50,000+</div>
              <div className="text-base-content/70">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-base-content/70">Questions</div>
            </div>
            <div>
            <div>
              <div className="text-base-content/70">Students</div>
            </div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-base-content/70">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-base-content/70">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Crush Your JAMB Exam?</h2>
          <p className="text-xl text-base-content/70 mb-8">
            Join thousands of students who have achieved their dreams with DEVOUR TO CRUSH.
          </p>
          <Link
            href="/auth/register"
            className="btn btn-primary px-8 py-3 font-semibold"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>

            {/* Footer */}
      <section className="py-16">
        <Footer />
      </section>


    </div>
  );
}
