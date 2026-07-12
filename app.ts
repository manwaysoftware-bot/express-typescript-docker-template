import exp from 'express';
import { globalErrorHandler, resInterspector } from './aop/aop.js';
import { error } from 'node:console';
import { server } from './config.js';
const app: exp.Application = exp();

//add this first line
app.use(exp.json())
app.use(resInterspector);

app.get('/', (req: exp.Request, res: exp.Response) => {
    
res.status(400).json("hello")
    
})



app.listen(server.port, () => {
    console.log('Server is running on http://localhost:'+server.port);
} )      

//added here keps this as a last line
app.use(globalErrorHandler);

export default app
