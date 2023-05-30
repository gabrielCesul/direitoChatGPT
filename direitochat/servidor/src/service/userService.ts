import { CustomError } from "../Custom/CustomError"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { userRepository } from "../repository/userRepository"
const secret = process.env.SECRET as string

export class userService {
    async createUser(req: any) {
        try {
            const { nome, password, email } = req
            if (await userRepository.findOneBy({ email })) {
                throw new CustomError("Email já cadastrado", 409)
            }
            const salt = await bcrypt.genSalt(12)
            const passCrypt = await bcrypt.hash(password, salt)
            await userRepository.save(
                userRepository.create({ nome, password: passCrypt, email })
            )
        } catch (err) {
            throw err
        }
    }

    async getUser(id: number) {
        try {
            const user = await userRepository.findOneBy({ id })
            if (!user) throw new CustomError("Usuário não encontrado", 404)
            return user
        } catch (err) {
            throw err
        }
    }

    async deleteUser(id: number) {
        try {
            userRepository.remove(await this.getUser(id))
        } catch (err) {
            throw err
        }
    }

    async loginUser(email: string, password: string) {
        try {
            const user = await userRepository.findOneBy({ email })
            if (!user) throw new CustomError("Email não cadastrado", 404)
            if (!(await bcrypt.compare(password, user.password)))
                throw new CustomError("Senha incorreta", 401)

            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: 80000,
            })
            return token
        } catch (err) {
            throw err
        }
    }
}
