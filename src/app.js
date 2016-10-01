import express from 'express';

const app = express();
export default app;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(process.env.PORT || 3000);
