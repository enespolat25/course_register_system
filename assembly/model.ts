import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class Course {
    id: string;
    name: string;
    description: string;
    owner: string;
    numberOfStudents: u32;



    public static loadCourseInfo(payload: Course): Course {
        const course = new Course();
        course.id = payload.id;
        course.name = payload.name;
        course.description = payload.description;
        course.owner = context.sender;
        return course;
    }
    public UpdateStudents(): void {
        this.numberOfStudents = this.numberOfStudents + 1;
    }
}

export const courseList = new PersistentUnorderedMap<string, Course>("COURSE_LIST");