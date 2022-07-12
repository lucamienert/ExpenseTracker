import express from 'express'
import {
    getUser,
    addUser,
    deleteUser,
    resetUser
} from '../controller/userController'

const userRouter = express.Router()

userRouter.get('/user/:id', getUser)
userRouter.post('/user', addUser)
userRouter.delete('/user/:id', deleteUser)
userRouter.put('/user/:id', resetUser)

export default userRouter