// app/onboarding/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  FileText, 
  Briefcase, 
  MapPin, 
  DollarSign,
  Clock,
  Target,
  CheckCircle,
  Sparkles
} from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: "",
    phone: "",
    location: "",
    
    // Step 2: Professional Info
    currentRole: "",
    experience: "",
    education: "",
    skills: [] as string[],
    
    // Step 3: Job Preferences
    desiredRole: "",
    desiredSalary: "",
    jobType: "",
    preferredLocations: [] as string[],
    
    // Step 4: CV Upload
    cvFile: null as File | null,
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text dark:text-white">
              Step {currentStep} of {totalSteps}
            </span>
            <button 
              onClick={handleSkip}
              className="text-sm text-primary hover:underline font-medium"
            >
              Skip for now
            </button>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text dark:text-white">Personal Information</h2>
                  <p className="text-text-light dark:text-gray-400">Let's get to know you better</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    placeholder="Aisha Ibrahim"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                      placeholder="+234 801 234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                        placeholder="Lagos, Nigeria"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Background */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text dark:text-white">Professional Background</h2>
                  <p className="text-text-light dark:text-gray-400">Tell us about your experience</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Current/Recent Role *
                  </label>
                  <input 
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({...formData, currentRole: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    placeholder="e.g., Frontend Developer, Product Manager"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Years of Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Education Level *
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({...formData, education: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    >
                      <option value="">Select education</option>
                      <option value="highschool">High School</option>
                      <option value="diploma">Diploma/Certificate</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Key Skills (Add at least 3) *
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    placeholder="Type a skill and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        e.preventDefault();
                        setFormData({
                          ...formData, 
                          skills: [...formData.skills, e.currentTarget.value.trim()]
                        });
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {skill}
                        <button
                          onClick={() => {
                            setFormData({
                              ...formData,
                              skills: formData.skills.filter((_, i) => i !== index)
                            });
                          }}
                          className="hover:text-red-600"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Job Preferences */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text dark:text-white">Job Preferences</h2>
                  <p className="text-text-light dark:text-gray-400">What's your dream job like?</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Desired Job Title *
                  </label>
                  <input 
                    type="text"
                    value={formData.desiredRole}
                    onChange={(e) => setFormData({...formData, desiredRole: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    placeholder="e.g., Senior Product Designer"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Expected Salary (₦)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text"
                        value={formData.desiredSalary}
                        onChange={(e) => setFormData({...formData, desiredSalary: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                        placeholder="200,000 - 500,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text dark:text-white mb-2">
                      Job Type *
                    </label>
                    <select
                      value={formData.jobType}
                      onChange={(e) => setFormData({...formData, jobType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Preferred Locations
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Remote"].map((location) => (
                      <label 
                        key={location}
                        className="flex items-center gap-2 p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary transition-colors"
                      >
                        <input 
                          type="checkbox"
                          checked={formData.preferredLocations.includes(location)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                preferredLocations: [...formData.preferredLocations, location]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                preferredLocations: formData.preferredLocations.filter(l => l !== location)
                              });
                            }
                          }}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-text dark:text-white">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Upload CV */}
          {currentStep === 4 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text dark:text-white">Upload Your CV</h2>
                  <p className="text-text-light dark:text-gray-400">We'll use this to apply to jobs</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-text dark:text-white font-medium mb-1">
                        Drop your CV here or click to browse
                      </p>
                      <p className="text-sm text-text-light dark:text-gray-400">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                    <input 
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cv-upload"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setFormData({...formData, cvFile: e.target.files[0]});
                        }
                      }}
                    />
                    <label 
                      htmlFor="cv-upload"
                      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium cursor-pointer"
                    >
                      Choose File
                    </label>
                  </div>
                </div>

                {formData.cvFile && (
                  <div className="flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                    <FileText className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text dark:text-white">{formData.cvFile.name}</p>
                      <p className="text-xs text-text-light dark:text-gray-400">
                        {(formData.cvFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <button
                      onClick={() => setFormData({...formData, cvFile: null})}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                )}

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Don't have a CV?</strong> No worries! You can skip this step and our AI will help you create one later.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-text dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {currentStep === totalSteps ? (
                <>
                  Complete Setup
                  <CheckCircle className="w-5 h-5" />
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}