function createObj(){
    return Object.create(null);
}

const myObj = createObj();
console.log(Object.getPrototypeOf(myObj));