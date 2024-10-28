import { OutputService } from "./service/output-service";
//import "./controllers";


process.env.TZ = "UTC";


const output = new OutputService();

console.log("Let's kick it!");
