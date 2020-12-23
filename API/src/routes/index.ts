import { Router } from 'express';

import postsRouter from './posts.routes';
import pagesRouter from './pages.routes';

const routes = Router();

routes.use('/posts', postsRouter);
routes.use('/pages', pagesRouter);

export default routes;