import config from './config';

import express from 'express';

const startServer = async () => {
  const app = express();
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, (err: any) => {
    if (err) {
      console.error(err);
      process.exit(1);
      return;
    }
    console.log(`Server listening on port: ${config.port}`);
  });
};

startServer();
