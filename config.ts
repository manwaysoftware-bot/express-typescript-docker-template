import dotenv from 'dotenv'

//important this line
dotenv.config();

type ServerConfig={
    port:string|undefined
}

export let server:ServerConfig={
    port:process.env.port
}

