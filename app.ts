import exp from 'express';
import { globalErrorHandler, resInterspector } from './aop/aop.js';
import { error } from 'node:console';
const app: exp.Application = exp();

//add this first line
app.use(exp.json())
app.use(resInterspector);

app.get('/', (req: exp.Request, res: exp.Response) => {
    
res.status(400).json("hello")
    
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
} )      

//added here keps this as a last line
app.use(globalErrorHandler);

export default app
