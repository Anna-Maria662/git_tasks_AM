
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contactInfo: {
        email: "text.text@example.com",
        phone: "999-123-4567"
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const parts = name.split(" ");
        if (parts.length === 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            console.error("Wrong full name format. Expect to be 'Name, Surname'.");
        }
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge < 150) {
            this._age = newAge;
        } else {
            console.error("Wrong age. Age should be from 0 to 150.");
        }
    },

    get maskedEmail() {
        const emailParts = this.contactInfo.email.split("@");
        const username = emailParts[0];
        const domain = emailParts[1];
        return `${username.substring(0, 3)}...@${domain}`;
    },

    updateContact(newEmail, newPhone) {
        this.contactInfo.email = newEmail;
        this.contactInfo.phone = newPhone;
        console.log("Contact information has been successfully updated.");
    }
};

console.log("First full name:", person.fullName);

person.fullName = "Jane Smith";
console.log("New full name:", person.fullName);

person.age = 35;
console.log("Age:", person.age);

person.age = "invalid age";

console.log("Masked email:", person.maskedEmail);

person.updateContact("new.email@example.com", "555-987-6543");
console.log("New email:", person.contactInfo.email);
