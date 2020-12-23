import express from 'express';
import { HOST, PORT } from './utils/config/env.config';
import routes from './routes';

const app = express();

const DateNow = Date().toString();

app.get('/', (req, res) => {
  res.json([
    {
      Hello: 'Welcome to Native News API',
      Posts: `${HOST}${PORT}/posts`,
      Pages: `${HOST}${PORT}/pages`,
    },
  ]);
});

app.use('/', routes);
app.listen(PORT, () => {
  console.info('⌚ Server starting');
  console.info(`🚀 Server started on ${HOST}${PORT} at ${DateNow}`);
});
