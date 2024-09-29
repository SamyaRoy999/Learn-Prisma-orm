import {Router} from 'express';
import { createUser } from '../Controller/User.controller';

const route =  Router()

route.post('/', createUser)


export default route