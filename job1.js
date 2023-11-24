function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


const exampleObject = { age: 23, name: 'Hello', sore: true };


const newExampleObject = Object.create(exampleObject);

exampleObject.age = '24';

exampleObject.name = 'Misha';

exampleObject.sore = true;

printOwnProperties(exampleObject);

