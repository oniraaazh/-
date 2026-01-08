
import { EducationStage, Subject, Task, Lesson, ClassRoom, AcademicReport } from './types';

export const MOCK_SUBJECTS: Subject[] = [
  { id: '1', name: 'اللغة العربية', icon: '📖', grade: 8, stage: EducationStage.BASIC },
  { id: '2', name: 'الرياضيات', icon: '📐', grade: 8, stage: EducationStage.BASIC },
  { id: '3', name: 'العلوم', icon: '🧪', grade: 8, stage: EducationStage.BASIC },
  { id: '4', name: 'اللغة الإنجليزية', icon: '🔤', grade: 8, stage: EducationStage.BASIC },
  { id: '5', name: 'التربية الإسلامية', icon: '🕌', grade: 8, stage: EducationStage.BASIC },
];

export const MOCK_LESSONS: Lesson[] = [
  { id: 'l1', title: 'الجملة الاسمية والخبر', subjectId: '1', duration: '15:00', isCompleted: true },
  { id: 'l2', title: 'المبتدأ وأنواعه', subjectId: '1', duration: '12:30', isCompleted: false },
  { id: 'l3', title: 'المعادلات من الدرجة الأولى', subjectId: '2', duration: '20:00', isCompleted: true },
  { id: 'l4', title: 'الخلية النباتية والحيوانية', subjectId: '3', duration: '18:45', isCompleted: false },
];

export const MOCK_TASKS: Task[] = [
  { id: 't1', title: 'حل تمارين الجبر ص ٤٥', subject: 'الرياضيات', deadline: 'غداً', status: 'pending' },
  { id: 't2', title: 'بحث عن الكائنات الدقيقة', subject: 'العلوم', deadline: 'الأحد القادم', status: 'submitted' },
  { id: 't3', title: 'إعراب سورة النبأ', subject: 'اللغة العربية', deadline: 'منتهي', status: 'graded', grade: 'ممتاز' },
];

export const MOCK_TEACHER_CLASSES: ClassRoom[] = [
  { id: 'c1', name: 'الثامن (أ)', studentCount: 42, subject: 'الرياضيات' },
  { id: 'c2', name: 'الثامن (ب)', studentCount: 38, subject: 'الرياضيات' },
  { id: 'c3', name: 'السابع (ج)', studentCount: 45, subject: 'الهندسة' },
];

export const MOCK_REPORTS: AcademicReport[] = [
  { subject: 'الرياضيات', grade: 95, teacherComment: 'أداء ممتاز وتطور ملحوظ في الهندسة', attendance: 98 },
  { subject: 'العلوم', grade: 88, teacherComment: 'مشاركة جيدة، يحتاج لتركيز أكثر في العملي', attendance: 100 },
  { subject: 'العربية', grade: 92, teacherComment: 'خط جميل وإلمام واسع بقواعد النحو', attendance: 95 },
];
