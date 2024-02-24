let appointments = [
    { id: 1, patientName: "John Doe", date: "2024-02-23", time: "10:00 AM", reason: "Regular Checkup", age: "Child", gender: "Male" },
    { id: 2, patientName: "Jane Smith", date: "2024-02-24", time: "01:06 AM", reason: "Dental Cleaning", age: "MiddleAgge", gender: "Male" },
    { id: 3, patientName: "Dhiraj Prajapati", date: "2024-02-22", time: "09:30 AM", reason: "Consultant", age: "Adult", gender: "Male" },
    { id: 4, patientName: "Glen Smith", date: "2024-01-01", time: "11:30 AM", reason: "Operation", age: "Adult", gender: "Female" },
    { id: 5, patientName: "oontie ith", date: "2023-12-25", time: "04:30 PM", reason: "Operation", age: "Old", gender: "Female" }
    // Add more appointments as needed
];


// Function to display appointments in the table
function displayAppointments(appointmentsToDisplay) {
    const tableBody = document.querySelector('#appointmentsTable tbody');

    // Clear table before adding rows
    tableBody.innerHTML = '';

    appointmentsToDisplay.forEach(appointment => {
        const row = tableBody.insertRow();

        row.insertCell(0).textContent = appointment.id;
        row.insertCell(1).textContent = appointment.patientName;
        row.insertCell(2).textContent = appointment.date;
        row.insertCell(3).textContent = appointment.time;
        row.insertCell(4).textContent = appointment.reason;
        row.insertCell(5).textContent = appointment.age;
        row.insertCell(6).textContent = appointment.gender;

        const actionCell = row.insertCell(7);
        const acceptButton = document.createElement('button');
        acceptButton.textContent = 'Accept';
        // Add event listener for accept button click
        acceptButton.addEventListener('click', () => {
            // Implement logic to view appointment details
            console.log('Accepted for:', appointment.patientName);
        });
        actionCell.appendChild(acceptButton);
        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        // Add event listener for accept button click
        rejectButton.addEventListener('click', () => {
            // Implement logic to view appointment details
            console.log('Rejected for:', appointment.patientName);
        });
        actionCell.appendChild(rejectButton);
    });
} 

function filterAppointments() {
    const ageFilter = document.getElementById('ageFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;

    const filteredAppointments = appointments.filter(appointment => {
        const ageMatch = ageFilter === 'all' || appointment.age === ageFilter;
        const genderMatch = genderFilter === 'All' || appointment.gender.toLowerCase() === genderFilter.toLowerCase();
        return ageMatch && genderMatch;
    });

    displayAppointments(filteredAppointments);
}

// Function to sort the table based on column index
function sortTable(columnIndex) {
    const ageFilter = document.getElementById('ageFilter').value;
    let sortedAppointments = appointments;

    if (ageFilter != 'all') {
        sortedAppointments = sortedAppointments.filter(appointment => appointment.age == ageFilter);
    }

    sortedAppointments.sort((a, b) => {
        const valueA = a[Object.keys(a)[columnIndex]];
        const valueB = b[Object.keys(b)[columnIndex]];
        if (typeof valueA == 'string') {
            return valueA.localeCompare(valueB);
        } else {
            return valueA - valueB;
        }
    });
    displayAppointments(sortedAppointments);
}

// Function to search appointments by patient name
function searchAppointments() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const ageFilter = document.getElementById('ageFilter').value;

    const filteredAppointments = appointments.filter(appointment => {
        const patientName = appointment.patientName.toLowerCase();
        const age = appointment.age;

        // Check if patient name contains the search input and age matches the filter
        return patientName.includes(searchInput) && (ageFilter == 'all' || age == ageFilter);
    });

    displayAppointments(filteredAppointments);
}

// Call the function to display appointments initially
// displayAppointments();
displayAppointments(appointments);