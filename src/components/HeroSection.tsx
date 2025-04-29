
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-dark pt-16">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-900/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-violet-600/5 rounded-full blur-3xl"></div>
      <div className="section-container relative z-10 flex flex-col md:flex-row items-center">
        <div className="flex-1 md:pr-10">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white animate-fade-in">
            Learn new skills.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Anytime. Anywhere.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl animate-fade-in [animation-delay:200ms]">
            Access thousands of high-quality courses from industry experts completely free. 
            Start your learning journey today and unlock your full potential.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
            <Button className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-6">Get Started</Button>
            <Button variant="outline" className="border-violet-500 text-violet-400 hover:text-violet-300 text-lg px-8 py-6">
              Browse Courses
            </Button>
          </div>
          <div className="mt-8 flex items-center space-x-4 animate-fade-in [animation-delay:600ms]">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border-2 border-dark"></div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">10,000+</span> students already learning
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 animate-fade-in [animation-delay:400ms]">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-violet-400 rounded-lg blur opacity-30"></div>
            <div className="relative bg-dark-lighter rounded-lg overflow-hidden border border-violet-500/20">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Student learning online"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent h-1/4"></div>
            </div>
            <div className="absolute -right-4 -bottom-4 bg-dark-lighter p-4 rounded-lg glass-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Get certified</p>
                  <p className="text-sm text-white font-medium">Earn achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
