// import express from 'express';
// import { getAllBlogs } from '../controllers/blog-controller';
// const blogRouter = express.Router();
// // const router = express.Router();

// router.get('/',getAllBlogs);

// export default blogRouter;


import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/add',addBlog)
blogRouter.put('/update/:id',updateBlog);
blogRouter.get('/:id',getById)
blogRouter.delete('/:id',deleteBlog)
blogRouter.get('/user/:id',getByUserId);

export default blogRouter;
