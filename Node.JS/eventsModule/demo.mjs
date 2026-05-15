import { EventEmitter } from "events";

const emitter = new EventEmitter();
const greet =(name)=>{
    console.log(`Hi ${name}!,What can i do for you?`)
};
emitter.on("Hey Jarvis",greet);//Triggers when "Hey jarvis" is said
emitter.once("Wakeup Jarvis",greet);//Works only once when triggered
emitter.emit("Hey Jarvis","Hem");
emitter.emit("Hey Jarvis","Hem");
emitter.off("Hey Jarvis",greet);//Only works when the callback fn is stored,like u can't refer to something which doesn't exist
emitter.emit("Hey Jarvis","Hem");