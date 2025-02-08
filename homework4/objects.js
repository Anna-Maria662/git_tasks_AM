const complexObject = {
    name: "My little company",
    address: {
        street: "Main Street",
        number: 123,
        city: "Chicago",
        country: 'USA',
        Postcode: 43463874,
        mobile: +856483555
    },
    employees: [
        { id: 1, name: "Alice", position: "Developer" },
        { id: 2, name: "Bob", position: "Designer" },
        { id: 3, name: "Charlie", position: "QA" }
    ],
    departments: {
        engineering: {
            head: "Alice",
            employeesCount: 10
        },
        design: {
            head: "Bob",
            employeesCount: 5
        },
        qa: {
            head: "Charlie",
            employeesCount: 5
        }
    },
    getSummary: function() {
        console.log("Company Summary:");
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address.number} ${this.address.street}, ${this.address.city}, ${this.address.country}`);
        console.log("Employees:");
        this.employees.forEach(employee => {
            console.log(`  - ${employee.name} (${employee.position})`);
        });
        console.log("Departments:");
        for (const departmentName in this.departments) {
            const department = this.departments[departmentName];
            console.log(`  - ${departmentName}: Head - ${department.head}, Employees - ${department.employeesCount}`);
        }
    }
};

complexObject.getSummary();

