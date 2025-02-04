import { UserModel } from "../Model/User.model.js"


async function getUsers (req,res){
    try {

        const users = await UserModel.find()
        return res.status(200).json(users)
        
    } catch (error) {
        console.log(error)
    }
}

export { getUsers }