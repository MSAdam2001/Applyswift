import Link from "next/link";
import { 
  Zap, 
  Target, 
  Mail, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Shield,
  Sparkles,
  ArrowRight,
  Clock,
  Brain
} from "lucide-react";
import { pricingPlans } from "@/lib/constants/mockData";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-text dark:text-white">Applyswift</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 flex-wrap">
            <a href="#how-it-works" className="text-text-light dark:text-gray-300 hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="text-text-light dark:text-gray-300 hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-text-light dark:text-gray-300 hover:text-primary transition-colors">Testimonials</a>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Link 
              href="/auth/login" 
              className="text-text-light dark:text-gray-300 hover:text-primary transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-light dark:bg-primary-900/30 text-primary dark:text-primary-300 px-4 py-2 rounded-full mb-6 border border-primary-200 dark:border-primary-800">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 1,247+ Nigerian Job Seekers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text dark:text-white mb-6 leading-tight">
              Land Your Dream Job <br />
              <span className="text-primary dark:text-primary-400">While You Sleep</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-light dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Applyswift automatically finds, matches, and applies to jobs for you—with AI-generated CVs and cover letters. Save time, reduce stress, and get hired faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/auth/register" 
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Start Applying Automatically
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white px-8 py-4 rounded-lg hover:border-primary transition-all font-semibold text-lg w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-text-light dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Free forever plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: "5,634", label: "Applications Sent", icon: Mail },
              { value: "23.5%", label: "Success Rate", icon: TrendingUp },
              { value: "1,247", label: "Active Users", icon: Users },
              { value: "48hrs", label: "Avg. Response Time", icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-1">{stat.value}</div>
                <div className="text-text-light dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">How Applyswift Works</h2>
            <p className="text-lg sm:text-xl text-text-light dark:text-gray-300 max-w-2xl mx-auto">
              Three simple steps to transform your job search
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[{ step: "1", icon: Target, title: "Set Your Preferences", description: "Tell us your skills, experience, and dream job criteria. Upload your CV or let our AI create one for you." },
              { step: "2", icon: Brain, title: "AI Finds & Matches", description: "Our system searches 10+ Nigerian job boards daily, matching opportunities to your profile with 95% accuracy." },
              { step: "3", icon: Zap, title: "Auto-Apply 24/7", description: "We automatically apply on your behalf with customized cover letters. Track everything from your dashboard." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">STEP {item.step}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-text dark:text-white mb-3">{item.title}</h3>
                <p className="text-text-light dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">Loved by Nigerian Professionals</h2>
            <p className="text-lg sm:text-xl text-text-light dark:text-gray-300">See how Applyswift changed their careers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[{ name: "Chidinma Eze", role: "Frontend Developer", location: "Lagos", testimonial: "I got 3 interview calls in my first week! Applyswift saved me hours of manual applications.", avatar: "CE" },
              { name: "Ibrahim Suleiman", role: "Product Designer", location: "Abuja", testimonial: "The AI-generated cover letters are impressive. I landed my dream job in just 2 weeks!", avatar: "IS" },
              { name: "Grace Okonkwo", role: "Data Analyst", location: "Port Harcourt", testimonial: "Best investment in my career. The auto-apply feature works even while I sleep!", avatar: "GO" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-background dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-text dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-text-light dark:text-gray-400">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
                <p className="text-text-light dark:text-gray-300 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-background dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-text-light dark:text-gray-300">Choose the plan that fits your job search needs</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200 dark:border-gray-700'}`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-text dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-text dark:text-white">{plan.price}</span>
                  <span className="text-text-light dark:text-gray-400 ml-2">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-light dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-700' : 'bg-gray-100 dark:bg-gray-800 text-text dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Job Search?</h2>
          <p className="text-lg sm:text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join 1,247+ Nigerians who are landing interviews faster with Applyswift
          </p>
          <Link 
            href="/auth/register" 
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text dark:bg-gray-950 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Applyswift</span>
              </div>
              <p className="text-gray-400 text-sm">
                Automated job search for Nigerian professionals
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">NDPR Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© 2025 Applyswift All rights reserved.</p>  
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>NDPR Compliant • Data Protected</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
