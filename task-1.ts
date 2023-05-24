// Using type inference.
let isHungry = true;

// Using explicit type annotation
let hasBeenWashed: boolean = true;

let varstring = "string";
let varstringexp: string = "string";

let number = 2;
let nunmberexp: number = 2;

let arrayBool = [true, false, true];
let arrayBoolexp: boolean[] = [true, false, true];

let arrayNumber = [1, 2, 3];
let arrayNumberexp: number[] = [1, 2, 3];

let arrayString = ["one", "two", "three"];
let arrayStringexp: string[] = ["one", "two", "three"];



function sum(x: number, y: number) {
    return x + y;
}
sum(1, 2);

interface objectone {
    amount: number;
    uniqueId: string;
    isValid: boolean;
    addressLines: string[];
}

function declareObject(opts: objectone) {
    return "hello" + opts.amount + opts.uniqueId + opts.isValid + opts.addressLines;
}

console.log(declareObject({ amount: 1, uniqueId: "string", isValid: true, addressLines: ["string", "string"] }));


type Colour = {
    x: string;
    y: string;
}

function whichColour(colour: Colour) {
    return "The colour x is " + colour.x + " The colour y is " + colour.y;
}

console.log(whichColour({ x: "YELLOW", y: "BLUE" }));