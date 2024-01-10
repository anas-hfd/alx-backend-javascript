// Defining the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Mahone',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Creating an array of students
const studentsList: Student[] = [student1, student2];

// Rendering the table
function renderTable(students: Student[]) {
  const table = document.createElement('table');
    
    students.forEach(student => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
}

// Rendering the table with the studentsList
renderTable(studentsList);
