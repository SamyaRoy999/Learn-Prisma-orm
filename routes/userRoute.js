import {Router} from 'express';
import { createUser, findUser, updateUser } from '../Controller/User.controller.js';
 
const router =  Router()

router.post('/', createUser)
router.get('/', findUser)
router.put('/:id', updateUser)


export default router