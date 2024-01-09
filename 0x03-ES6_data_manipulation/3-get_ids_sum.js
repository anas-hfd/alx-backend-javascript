export default function getStudentIdsSum(students) {
  if (!Array.isArray) {
    return [];
  }
  return students.reduce((accumilator, currentStudent) => accumilator + currentStudent.id, 0);
}
