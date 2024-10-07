import {Router} from 'express';
import { createUser, deleteUser, findOneUser, findUser, updateUser } from '../Controller/User.controller.js';
 
const router =  Router()

router.post('/', createUser)
router.get('/', findUser)
router.get('/:id', findOneUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router