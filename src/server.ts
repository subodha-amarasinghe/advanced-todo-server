import app from './app';

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});