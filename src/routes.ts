import { Express, Request, Response } from 'express';

function routes(app: Express) {
  app.get('/healtcheck', (req: Request, res: Response) => {
    res.send('OK');
  });
  app.post('/mailer', require('./services/mailer/mailer.service').default)
}

export default routes;
