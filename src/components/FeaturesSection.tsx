
import { BookOpen, Bookmark, Users, Award } from "lucide-react";

const features = [
  {
    name: "Free Access",
    description: "All courses are completely free. No hidden charges or premium content.",
    icon: BookOpen
  },
  {
    name: "Learn at Your Own Pace",
    description: "Flexible learning schedule that adapts to your availability and lifestyle.",
    icon: Bookmark
  },
  {
    name: "Expert Instructors",
    description: "Learn from industry professionals with years of practical experience.",
    icon: Users
  },
  {
    name: "Certification",
    description: "Earn verifiable certificates upon completion of courses and showcase your skills.",
    icon: Award
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-dark-lighter py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">Why Choose <span className="text-violet-400">LearnHub</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our platform is designed to give you the best learning experience without any cost
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={feature.name}
              className="relative group p-6 bg-dark rounded-xl border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-violet-900/30 flex items-center justify-center mb-5 group-hover:bg-violet-600/50 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-violet-900/20 to-dark-lighter rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-violet-600/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold font-poppins text-white">Ready to start learning?</h2>
                  <p className="mt-3 text-gray-400">
                    Join thousands of students who are already improving their skills and advancing their careers.
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark bg-violet-400 hover:bg-violet-500"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
