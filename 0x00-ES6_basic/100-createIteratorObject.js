export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        // yield keyword is used to produce each employee one by one
        yield employee;
      }
    }
  }());
}
