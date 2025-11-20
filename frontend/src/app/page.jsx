import Link from 'next/link';
import { Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
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
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/community"
              className="border-2 border-base-100 text-base-100 px-8 py-3 rounded-lg font-semibold hover:bg-base-100 hover:text-primary transition-colors"
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
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Question Bank</h3>
              <p className="text-gray-600">
                Access thousands of JAMB questions across all subjects with detailed explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exam Simulator</h3>
              <p className="text-base-content/70">
                Practice under real exam conditions with timed mock tests and performance analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-base-content/70">Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-base-content/70">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Crush Your JAMB Exam?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who have achieved their dreams with DEVOUR TO CRUSH.
          </p>
          <Link
            href="/auth/register"
            className="bg-primary text-primary-content px-8 py-3 rounded-lg font-semibold hover:bg-primary-focus transition-colors"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>

            {/* Footer */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-8">
            ©️2025 Crush EduPlace Intl. All Left Researved.
          </p>
          <Link
            href="http://instagram.com/crush_eduplace"
            className=""
          >
            <Instagram />
          </Link>
        </div>
      </section>


    </div>
  );
}
