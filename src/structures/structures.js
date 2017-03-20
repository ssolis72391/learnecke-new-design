export const CourseStructure = {
  fields: ['id', 'itemType', 'title', 'courseCode', 'description'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
};

export const LessonStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
};

export const LectureStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation', 'Questions'],
};

export const DiscussionStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation', 'Questions'],
};

export const DemonstrationStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation', 'Questions'],
};

export const PerformanceStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation', 'Questions'],
};

export const EvaluationStructure = {
  fields: ['id', 'itemType', 'title', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance'],
  subItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation', 'Questions'],
};

export const QuestionStructure = {
  fields: ['id', 'itemType', 'text', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
  subItemTypes: ['Choice', 'Distractor', 'instructions', 'requirements'],
};

export const ContentStructure = {
  fields: ['id', 'itemType', 'text', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
  subItemTypes: ['Content', 'Question', 'Instruction', 'Requirement'],
};

export const InstructionStructure = {
  fields: ['id', 'itemType', 'text', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
  subItemTypes: ['Content', 'Question', 'Instruction', 'Requirement'],
};

export const RequirementStructure = {
  fields: ['id', 'itemType', 'text', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
  subItemTypes: ['Content', 'Question', 'Instruction', 'Requirement'],
};

export const ObjectiveStructure = {
  fields: ['id', 'itemType', 'text', 'parents', 'description'],
  parentItemTypes: ['Lesson', 'Lecture', 'Discussion', 'Demonstration', 'Performance', 'Evaluation'],
  subItemTypes: ['Content', 'Question', 'Instruction', 'Requirement'],
};

export const Structures = {
  Course: CourseStructure,
  Lecture: LectureStructure,
  DiscussionStructure,
  DemonstrationStructure,
  Performance: PerformanceStructure,
  EvaluationStructure,
  QuestionStructure,
  Lesson: LessonStructure,
  Content: ContentStructure,
  Objective: ObjectiveStructure,
  Requirement: RequirementStructure,
  Instruction: InstructionStructure,
};
