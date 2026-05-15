import {EventEmitter} from "events"

const greet =(name)=>{
    console.log(`Hi ${name}!,What can i do for you?`)
};

const bye =(name)=>{
    console.log(`Bye ${name}!,Have a nice day!`)
};

const emitter = new EventEmitter();
emitter.once("greet",greet);
//with once
emitter.emit("greet","Hem");
emitter.emit("greet","Hem");
emitter.emit("greet","Hem");
//with on
emitter.on("greet",greet);
emitter.emit("greet","Hem");
emitter.on("bye",bye);
emitter.emit("bye","Hem");