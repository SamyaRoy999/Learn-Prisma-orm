import {Router} from 'express';
import { createUser, findOneUser, findUser, updateUser } from '../Controller/User.controller.js';
 
const router =  Router()

router.post('/', createUser)
router.get('/', findUser)
router.get('/:id', findOneUser)
router.put('/:id', updateUser)


export default router