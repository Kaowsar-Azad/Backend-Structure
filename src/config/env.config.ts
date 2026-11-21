import dotenv from "dotenv";
import path from "path"


dotenv.config({
    path:path.join(process.cwd(),".env")
})

export const env = {
    port: process.env.PORT || 5000 ,
    node_enviroment: process.env.node_enviroment || "development",
};