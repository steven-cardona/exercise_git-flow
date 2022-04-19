export const sum = (a, b) => {
  return a + b;
};

export const convertName = (nombre) => {
  return nombre.toUpperCase;
};

export const validateEmail = (email) => email.includes("@gmail.com");

export const Person = {
  name: "Steven",
  age: 18,
  showInfo: function () {
    return this.name + " " + this.age;
  },
};
