// Task_3
interface Course {
    id: number;
    code: string;
    name: string;
    credits: number;
}

const courses: Course[] = [
    {id: 1, code: "CS 101", name: "Introduction to CS", credits: 3},
    {id: 2, code: "CS 201", name: "Operating Systems", credits: 3},
    {id: 3, code: "Math 202", name: "Linear Algebra", credits: 3},
    {id: 4, code: "Eng 101", name: "Introduction to English", credits: 3},
]

function Courses() {
    return (
        <div>
            <h1>My Courses</h1>
            <ul>
                {courses.map((course: Course) => (
                    <li key={course.id}>
                        <strong>{course.code}</strong> - {course.name} ({course.credits} credits)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;