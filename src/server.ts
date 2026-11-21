
import { app } from "./app.js";
import { env } from "./config/env.config.js";

const bootstrap = () => {
     // server start 
    const Server = app.listen(env.port, () => {
        console.log("📂 প্রজেক্ট পাথ (Current Working Directory):", 
        process.cwd());
        console.log(`🚀 Server Run: http://localhost:${env.port}`);
    })
    // server stop
    const handleSignal = () => {
         console.log("Server Off");
        Server.close(() => {
            process.exit(1);
        });
    }

  process.on("SIGTERM" , handleSignal);
process.on("SIGINT" , handleSignal );

const handleError = (err : unknown) => {
    console.log("Error find" ,  err);
    Server.close(() => {
        process.exit(1);  
    })
}
  process.on("unhandledRejection" ,handleError );
  process.on("uncaughtException", handleError);  

}

bootstrap();