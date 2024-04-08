
import express from 'express';
import { createServer } from 'node:http';

const initExpressApp = () => {
  const expressServer = express();
  const server = createServer(expressServer) 

  expressServer.use(express.static('public'))

  expressServer.get('/', (_req: express.Request, res: express.Response) => {
    res.sendFile('index.html', { root: './public' });
  });
  
  server.listen(1337, () => {
    console.log('🎉 server running at http://localhost:1337 🎉');
  });

  return server
}

initExpressApp();