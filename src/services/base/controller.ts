import { Router } from 'express';
import handler from './handler';

const router = Router();

router.route('/')
  .get(handler.get)
  // .post(handler.post)

// router.route('/:id')
  // .get(handler.getById)
  // .put(handler.update)
  // .delete(handler.destroy)

export default router;
