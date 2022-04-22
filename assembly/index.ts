import { Course, courseList } from './model';
import { context } from 'near-sdk-as';

export function createCourse(course: Course): void {
    let coursePool = courseList.get(course.id);
    if (coursePool !== null) {
        throw new Error(`a course with ${course.id} already exists`);
    }
    courseList.set(course.id, Course.loadCourseInfo(course));
}

export function getCourse(id: string): Course | null {
    return courseList.get(id);
}

export function getCourses(): Course[] {
    return courseList.values();
}

export function registerCourse(courseId: string): void {
	const course = getCourse(courseId);
	if (course == null) {
		throw new Error("course not found");
	}
	
	course.UpdateStudents();
	courseList.set(course.id, course);
  }

  // 0 near deploy --accountId=enespolat25.testnet --wasmFile=build/release/students.wasm
	//1 near call enespolat25.testnet createCourse '{"course": {"id": "0", "name": "MATH", "description": "Linear Algabra"}}' --accountId=enespolat25.testnet

	//2 near view enespolat25.testnet getCourse '{"id": "0"}'
	//3 near view enespolat25.testnet getCourses

	//4 near call enespolat25.testnet registerCourse '{"courseId": "0"}'  --accountId=enespolat25.testnet
