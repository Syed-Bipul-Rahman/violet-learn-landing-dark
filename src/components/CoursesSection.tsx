
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Music"
];

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Dr. Angela Yu",
    duration: "42 hours",
    students: 125430,
    level: "Beginner" as const
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    author: "Sarah Johnson",
    duration: "28 hours",
    students: 84210,
    level: "Intermediate" as const
  },
  {
    id: 3,
    title: "Advanced JavaScript: From Zero to Expert",
    category: "Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Jonas Schmedtmann",
    duration: "36 hours",
    students: 92180,
    level: "Advanced" as const
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750516278-4cb31e001de5",
    author: "Emily Carter",
    duration: "18 hours",
    students: 45690,
    level: "Beginner" as const
  },
  {
    id: 5, 
    title: "Business Analytics & Intelligence",
    category: "Business",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    author: "Michael Porter",
    duration: "24 hours",
    students: 36780,
    level: "Intermediate" as const
  },
  {
    id: 6,
    title: "Music Theory & Composition",
    category: "Music",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    author: "David Cohen",
    duration: "32 hours",
    students: 28450,
    level: "Beginner" as const
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-dark py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">Explore Our <span className="text-violet-400">Courses</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover high-quality courses across various categories, all completely free
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dark-lighter">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData
                  .filter(course => category === "All" || course.category === category)
                  .map(course => (
                    <CourseCard key={course.id} {...course} />
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-violet-500 text-violet-400 hover:text-violet-300">
            View All Courses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
