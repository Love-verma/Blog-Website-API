// import express from 'express';
// import { getAllUser } from '../controllers/userr-controller';


// const router = express.Router();

// router.get("/",getAllUser);
// // router.get('/', (req,res)=>{
// //     res.send("User routes");
// // })

// export default router;

import express from 'express';
import { getAllUser, login, signup } from '../controllers/userr-controller.js';

const router = express.Router();

router.get("/", getAllUser);

router.post('/signup',signup)
router.post('/login',login)
export default router;
