// type = "module" defer

export default function Abhishek(){
  return "Abhishek in Module";
};
// variable export...

export let varia = "Variable call";

export function Vish(){
  return "Without default export!";
}

// Class export
export class UserClass{
  User(){
    console.log("Class");
  }
}
