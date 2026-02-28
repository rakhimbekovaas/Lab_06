export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {id: 1,
    title: "Introduction to CS", 
    instructor: "Dr. Strage",
    description: "This is introductory course which covers basic topics in ComputerScience"
    },

    {id: 2, 
    title: "Operating Systems", 
    instructor: "Dr. Ironman",
    description: "This course about Linux, file systems, kernel, and terminal"
    },    
        
       
    {id: 3, 
    title: "Linear Algebra", 
    instructor: "Dr. Thor",
    description: "Matrices, Vectors and operations with them"
    },    
  
    {id: 4, 
    title: "Introduction to English", 
    instructor: "Dr. Sofie Estell",
    description: "Basic English couse"
    },    

];

export function getCourseById(id: number): Course | undefined {
    return courses.find((c) => c.id ===id);
}
