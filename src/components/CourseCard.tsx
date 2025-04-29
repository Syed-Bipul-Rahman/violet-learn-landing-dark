
import { Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  category: string;
  image: string;
  author: string;
  duration: string;
  students: number;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const CourseCard = ({ title, category, image, author, duration, students, level }: CourseCardProps) => {
  let levelColor = "bg-green-500/20 text-green-300";
  if (level === "Intermediate") levelColor = "bg-yellow-500/20 text-yellow-300";
  if (level === "Advanced") levelColor = "bg-red-500/20 text-red-300";

  return (
    <div className="bg-dark-lighter rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col group hover:border-violet-500/50 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        <Badge variant="outline" className="absolute top-3 left-3 bg-dark/60 backdrop-blur-sm border-violet-500/30 text-violet-300">
          {category}
        </Badge>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-poppins font-semibold text-lg text-white mb-2 group-hover:text-violet-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          by <span className="text-gray-300">{author}</span>
        </p>
        <div className="flex items-center gap-4 mt-auto pt-3 border-t border-gray-800">
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-gray-400 text-xs">
            <Users className="h-3 w-3 mr-1" />
            {students.toLocaleString()} students
          </div>
          <div className={`ml-auto px-2 py-1 rounded text-xs ${levelColor}`}>
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
