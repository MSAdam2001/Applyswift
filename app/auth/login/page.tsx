"use client";

import { useState } from "react";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Target, 
  TrendingUp,
  Users,
  FileText,
  Mail,
  Briefcase,
  Clock,
  Shield,
  Star,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Applications",
      description: "Smart automation that applies to jobs matching your profile 24/7"
    },
    {
      icon: FileText,
      title: "CV Optimization",
      description: "AI-generated CVs tailored for each job application"
    },
    {
      icon: Mail,
      title: "Cover Letter Generator",
      description: "Personalized cover letters that highlight your strengths"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Advanced algorithms find the perfect roles for you"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Apply to hundreds of jobs in the time it takes to apply to one"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared without permission"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "500K+", label: "Applications Sent" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Auto-Apply" }
  ];

  const testimonials = [
    {
      name: "Aisha Mohammed",
      role: "Software Engineer",
      company: "TechCorp",
      image: "AM",
      text: "Applyswift helped me land my dream job! The AI-powered applications saved me countless hours."
    },
    {
      name: "Chidi Okafor",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "CO",
      text: "The CV optimization feature is incredible. I got 3x more interview callbacks within the first week!"
    },
    {
      name: "Fatima Bello",
      role: "UX Designer",
      company: "DesignHub",
      image: "FB",
      text: "Best investment in my career. The auto-apply feature works while I sleep. Highly recommend!"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "₦0",
      period: "forever",
      features: [
        "5 applications per month",
        "3 CV regenerations",
        "Basic job matching",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "₦12,000",
      period: "per month",
      features: [
        "25 applications per month",
        "20 CV regenerations",
        "Advanced job matching",
        "Auto-apply feature",
        "Priority support",
        "Cover letter generator"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₦25,000",
      period: "per month",
      features: [
        "Unlimited applications",
        "Unlimited CV regenerations",
        "AI-powered optimization",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text dark:text-white">Applyswift</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-text-light dark:text-gray-400 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-text-light dark:text-gray-400 hover:text-primary transition-colors">How It Works</a>
              <a href="#pricing" className="text-text-light dark:text-gray-400 hover:text-primary transition-colors">Pricing</a>
              <a href="#testimonials" className="text-text-light dark:text-gray-400 hover:text-primary transition-colors">Testimonials</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="/auth/login" className="text-text-light dark:text-gray-400 hover:text-primary transition-colors font-medium">
                Sign In
              </a>
              <a href="/auth/register" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-700 font-semibold transition-colors">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-text-light dark:text-gray-400 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="block py-2 text-text-light dark:text-gray-400 hover:text-primary transition-colors">How It Works</a>
              <a href="#pricing" className="block py-2 text-text-light dark:text-gray-400 hover:text-primary transition-colors">Pricing</a>
              <a href="#testimonials" className="block py-2 text-text-light dark:text-gray-400 hover:text-primary transition-colors">Testimonials</a>
              <div className="pt-4 space-y-2">
                <a href="/auth/login" className="block w-full text-center py-2 border-2 border-primary text-primary rounded-lg font-medium">
                  Sign In
                </a>
                <a href="/auth/register" className="block w-full text-center bg-primary text-white py-2 rounded-lg font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Job Applications</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text dark:text-white mb-6">
              Land Your Dream Job
              <span className="block text-primary mt-2">10x Faster</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-light dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Automate your job search with AI. Apply to hundreds of jobs with personalized CVs and cover letters while you focus on preparing for interviews.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/auth/register" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white px-8 py-4 rounded-lg hover:border-primary font-semibold transition-all">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-text-light dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">
              Everything You Need to Get Hired
            </h2>
            <p className="text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to give you an edge in the competitive job market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text dark:text-white mb-2">{feature.title}</h3>
                <p className="text-text-light dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
              Get started in minutes and let AI handle your job applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-text dark:text-white mb-2">Create Your Profile</h3>
              <p className="text-text-light dark:text-gray-400">Upload your CV and set your job preferences</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-text dark:text-white mb-2">AI Applies for You</h3>
              <p className="text-text-light dark:text-gray-400">Our AI finds and applies to matching jobs automatically</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-text dark:text-white mb-2">Get Interviews</h3>
              <p className="text-text-light dark:text-gray-400">Track applications and prepare for interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">
              Loved by Job Seekers
            </h2>
            <p className="text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
              See what our users are saying about their success with Applyswift
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-text-light dark:text-gray-400 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-text dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-text-light dark:text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your job search needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-8 border-2 ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200 dark:border-gray-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-text dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-text-light dark:text-gray-400">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-light dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/auth/register"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary-700' 
                      : 'border-2 border-primary text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Job Search?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of job seekers who have already found their dream jobs with Applyswift
          </p>
          <a href="/auth/register" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold transition-all shadow-lg hover:shadow-xl">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-text dark:text-white">Applyswift</span>
              </div>
              <p className="text-text-light dark:text-gray-400 text-sm">
                AI-powered job application platform helping job seekers land their dream roles faster.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-text dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-text-light dark:text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-text-light dark:text-gray-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-text-light dark:text-gray-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-text-light dark:text-gray-400 text-sm">
            <p>© 2025 Applyswift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}