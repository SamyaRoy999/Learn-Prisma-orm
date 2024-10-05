import prisma from "../DB/db.config.js";


export  const  createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const finduser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (finduser) {
        return res.json({status: 400, message:'email alrady taken'})
    }
    const newUser = await prisma.user.create({
        data:{
            name: name, 
            email: email, 
            password:password,
            created_at: new Date() 
        }
    })

     return res.json({status: 201, message:'user create succussfull'})
}
