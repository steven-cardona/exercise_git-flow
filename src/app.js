const sum = (a, b) => {
  return a + b;
};

const convertName = (nombre) => {
  return nombre.toUpperCase;
};

const validateEmail = (email) => email.includes("@gmail.com");

const Person = {
  name: "Steven",
  age: 18,
  showInfo: function () {
    return this.name + " " + this.age;
  },
};

module.exports = { validateEmail, Person, sum, convertName };
