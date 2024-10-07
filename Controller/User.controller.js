import prisma from "../DB/db.config.js";

// 1 creates user put

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const finduser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (finduser) {
        return res.json({ status: 400, message: 'email alrady taken' })
    }
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
            created_at: new Date()
        }
    })

    return res.json({ status: 201, message: 'user create succussfull' })
}

// 2 find all user get

export const findUser = async (req, res) => {
    const userData = await prisma.user.findMany({})
    return res.json({ status: 200, data: userData, message: "user find  succussfull" })
}

// 3find one user 

export const findOneUser = async (req, res) => {

    const userID = req.params.id
    const userOne = await prisma.user.findFirst({
        where: {
            id: Number(userID)
        }
    })

    return res.json({ status: 200, data: userOne, message: "user one find succussfull" })
}

// 4 update user put

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    await prisma.user.update({

        where: {
            id: Number(userId)
        },

        data: {
            name: name,
            email: email,
            password: password,
        }
    })
    return res.json({ status: 200, message: 'user update succussfull' });

}
