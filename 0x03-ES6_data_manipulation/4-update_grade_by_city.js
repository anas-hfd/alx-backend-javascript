export default function updateStudentGradeByCity(students, city, newGrades) {
  const noGrade = { grade: 'N/A' };

  if (!Array.isArray) {
    return [];
  }
  return students
    // filter students from the wanted city
    .filter((student) => student.location === city)
    // Map over the filtered students and update the grade
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
      // filter if the student has the grade
        .filter((grade) => grade.studentId === student.id)
        // if there is no grade
        .pop() || noGrade).grade,
    }));
}
