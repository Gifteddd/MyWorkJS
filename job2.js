function hasPropertyFunc(object, str) {
    return object.hasOwnProperty(str);
}

const student = {
  name: 'Ivan',
  age: 21,
}

console.log(hasPropertyFunc(student, 'name'));
