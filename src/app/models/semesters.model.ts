export class Semester {
  totalunits: any;
  gp: number;
  courseData: Array<CourseData>;
  createdAt: Date;
}


export class CourseData {
  coursename: string;
  unit?: number;
  grade: string;
}



