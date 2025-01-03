import express from 'express';
import {check,create,update,dele} from '../Controller/Usercontroller.js';

const router=express.Router()

router.get('/check/:id',check)
router.put('/create',create)
router.post('/update/:id',update)
router.delete('/delete/:id',dele)

export default router