import { validateEmail, convertName, sum, Person } from "./src/app";

const res = validateEmail("steven.cardona@gmail.com");

const result = sum(2, 4);

const newName = convertName("steven");

const showInfoPerson = Person.showInfo;

console.log(showInfoPerson);
