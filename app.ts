import exp from 'express';
const app: exp.Application = exp();

app.get('/', (req: exp.Request, res: exp.Response) => {
    res.send('Hello, World!');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
} )      
