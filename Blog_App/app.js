import express from 'express';
import bodyParser from 'body-parser';
import { router as indexRouter } from './routes/index.js';  // Import the router

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the routes from index.js
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
