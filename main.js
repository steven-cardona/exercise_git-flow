import { validateEmail, convertName, sum, Person } from "./src/app";

const res = validateEmail("steven.cardona@gmail.com");

const result = sum(2, 4);

const newName = convertName("steven");

const showInfoPerson = Person.showInfo;

console.log(showInfoPerson);

console.assert(result == 6, "Faile Test Sum(2,4) - Expect 6 | ToBe 6");
console.assert(sum(2, 1) == 3, "Faile Test Sum(2,1) - Expect 3 | ToBe 3");
