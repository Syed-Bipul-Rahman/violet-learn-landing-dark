
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "LearnHub completely changed my career path. I went from knowing nothing about web development to landing my first job as a frontend developer in just 6 months.",
    author: "Alex Johnson",
    role: "Frontend Developer",
    avatar: "AJ"
  },
  {
    id: 2,
    content: "The quality of the courses is outstanding. I've paid for other platforms before, but LearnHub's free content is just as good, if not better!",
    author: "Maria Garcia",
    role: "UX Designer",
    avatar: "MG"
  },
  {
    id: 3,
    content: "As someone with a busy schedule, the flexibility to learn at my own pace has been invaluable. LearnHub made it possible for me to upskill while working full-time.",
    author: "David Kim",
    role: "Product Manager",
    avatar: "DK"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-dark-lighter py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">What Our <span className="text-violet-400">Students</span> Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how LearnHub has helped thousands of students achieve their learning goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-dark border-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg width="45" height="36" className="text-violet-500/30" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4 36C9.4 36 6.1 34.6 3.5 31.8C1.1 29 0 25.6 0 21.8C0 17.2 1.4 13.2 4.3 9.7C7.2 6.1 10.8 3.4 15 1.7L17.6 5.8C14.1 7.6 11.4 9.4 9.3 11.3C7.2 13.1 6.1 15 6.1 17C6.1 17.9 6.6 18.9 7.4 20.1C8.5 19.1 10.1 18.5 12.1 18.5C15.1 18.5 17.6 19.4 19.4 21.1C21.3 22.8 22.3 25.1 22.3 27.8C22.3 30.6 21.2 32.9 19.1 34.6C16.9 35.6 14.4 36 13.4 36ZM36.1 36C32.1 36 28.8 34.6 26.2 31.8C23.8 29 22.7 25.6 22.7 21.8C22.7 17.2 24.1 13.2 27 9.7C29.9 6.1 33.5 3.4 37.7 1.7L40.3 5.8C36.8 7.6 34.1 9.4 32 11.3C29.9 13.1 28.8 15 28.8 17C28.8 17.9 29.3 18.9 30.1 20.1C31.2 19.1 32.8 18.5 34.8 18.5C37.8 18.5 40.3 19.4 42.1 21.1C44 22.8 45 25.1 45 27.8C45 30.6 43.9 32.9 41.8 34.6C39.6 35.6 37.1 36 36.1 36Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-violet-500/30">
                    <AvatarFallback className="bg-violet-700/30 text-violet-300">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Join over 10,000+ happy students</p>
          <Button className="bg-violet-600 hover:bg-violet-700">Start Learning Today</Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
