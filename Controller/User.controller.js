import prisma from "../DB/db.config.js";


export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const finduser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (finduser) {
        return res.json({status: 400, massage:'email alrady taken'})
    }
}