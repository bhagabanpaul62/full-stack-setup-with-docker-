import 'dotenv/config'
import {db} from './db/index.js'
import {app} from './app.js'


const startServer = async () =>{
    try {
        //test db connection
        await db.execute('SELECT 1');
        console.log('database connected');

        //listen server 
        app.listen(process.env.PORT ,()=>{
            console.log(`server running on ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log("failed to start server ::",error);
        process.exit(1);
    }
}

startServer()