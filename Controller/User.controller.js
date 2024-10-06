import prisma from "../DB/db.config.js";


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
