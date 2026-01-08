
export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  PARENT = 'PARENT',
  ADMIN = 'ADMIN'
}

export enum EducationStage {
  BASIC = 'BASIC',
  SECONDARY = 'SECONDARY'
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  grade: number;
  stage: EducationStage;
}

export interface Lesson {
  id: string;
  title: string;
  subjectId: string;
  duration: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
}

export interface ClassRoom {
  id: string;
  name: string;
  studentCount: number;
  subject: string;
}

export interface AcademicReport {
  subject: string;
  grade: number;
  teacherComment: string;
  attendance: number;
}
