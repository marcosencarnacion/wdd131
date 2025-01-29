// Initial course object
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],

    // Method to render sections in the table
    renderSections() {
        const tbody = document.getElementById('sections');
        tbody.innerHTML = ''; // Clear current table
        this.sections.forEach(section => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        `;
            tbody.appendChild(row);
        });
    },

    // Method to enroll a student in a section
    enrollStudent(sectionNum) {
        const section = this.sections.find(s => s.sectionNum === sectionNum);
        if (section) {
            section.enrolled += 1; // Increment the number of enrolled students
            this.renderSections();  // Re-render the table to reflect the change
        }
    },

    // Method to drop a student from a section
    dropStudent(sectionNum) {
        const section = this.sections.find(s => s.sectionNum === sectionNum);
        if (section && section.enrolled > 0) {
            section.enrolled -= 1; // Decrement the number of enrolled students
            this.renderSections();  // Re-render the table to reflect the change
        }
    }
};

// Function to set course info on the page
function setCourseInfo(course) {
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
}

// Call the function to display course info when the page loads
setCourseInfo(aCourse);

// Initial rendering of sections
aCourse.renderSections();

// Add event listener for enrolling a student
document.getElementById('enrollStudent').addEventListener('click', function () {
    const sectionNum = parseInt(document.getElementById('sectionNumber').value);
    if (!isNaN(sectionNum)) {
        aCourse.enrollStudent(sectionNum);
    } else {
        alert("Please enter a valid section number.");
    }
});

// Add event listener for dropping a student
document.getElementById('dropStudent').addEventListener('click', function () {
    const sectionNum = parseInt(document.getElementById('sectionNumber').value);
    if (!isNaN(sectionNum)) {
        aCourse.dropStudent(sectionNum);
    } else {
        alert("Please enter a valid section number.");
    }
});
