import prisma from "../config/config"
import bcrypt from "bcrypt"

export const userUpdateMeta = async (req, res) => {
    const { firstName, lastName } = req.body

    try {
        await prisma.user.update({
            where: { id: req.session.userId },
            data: {
                firstName: firstName ?? undefined,
                lastName: lastName ?? undefined
            }
        })

        res.status(200).send('Updated Meta')
    } catch {
        res.status(500).send('Error: Update Meta')
    }
}

export const userUpdatePassword = async (req, res) => {
    const { password, oldPassword } = req.body
    let user

    try {
        user = await prisma.user.findUnique({
            where: { id: req.session.userId }
        })
    } catch {
        res.status(500).json({ message: 'Something went wrong chaning the password'})
        return
    }

    if(user) {
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password)

        if(!isPasswordCorrect) {
            res.status(403).send('Wrong Password')
        } else {
            const saltRounds = 10
            let newPassword = await bcrypt.hash(password, saltRounds)

            try {
                await prisma.user.update({
                    where: { id: req.session.userId },
                    data: { password: newPassword }
                })
            } catch {
                res.status(500).send('Cannot update password')
            }
        }
    }
}

export const userDelete = async (req, res) => {
    const userId = req.session.userId

    req.session.destroy(err => err 
        ? res.status(500).send('Cannot destroy session')
        : res.status(200).send('Deleted Session')
    )

    await prisma.user.delete({
        where: { id: userId }
    })
}
