const person={
    // name:"",
    // place:"",

 greetuser(){
    

    return `hello, my name is ${this.names} and im coiming from ${this.place}`;

},


};
// person.name="king";
// person.place="thanjavur";

// const personOne=person.greetuser();

// console.log(personOne);
// document.body.innerHTML=`<h1>${personOne}</h1>`;

const nameIput=prompt("what your name");
const placeIput=prompt("where are you coming from");

person.names=nameIput;
person.place=placeIput;

document.write(person.greetuser());

