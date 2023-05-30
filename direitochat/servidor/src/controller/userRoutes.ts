import { Request, Response, Router } from "express"
import { JwtVerify } from "../middleware/jwtVerify"
import { userService } from "../service/userService"
const userRouter = Router()

const userServ = new userService()

userRouter.get(
    "",
    new JwtVerify().verify,
    async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            return res.status(200).json(await userServ.getUser(+id))
        } catch (err: any) {
            return res
                .status(err.statusCode || 500)
                .json({ message: err.message || "Internal server error!" })
        }
    }
)

userRouter.post("", async (req: Request, res: Response) => {
    try {
        await userServ.createUser(req.body)
        return res.status(204).json({ message: "Usuario criado!" })
    } catch (err: any) {
        return res
            .status(err.statusCode || 500)
            .json({ message: err.message || "Internal server error!" })
    }
})

userRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const token = await userServ.loginUser(email, password)
        return res
            .cookie("x-acess-token", token)
            .status(200)
            .json({ message: "Login realizado com sucesso!" })
    } catch (err: any) {
        return res
            .status(err.statusCode || 500)
            .json({ message: err.message || "Internal server error!" })
    }
})

userRouter.post("/logout", async (req: Request, res: Response) => {
    try {
        return res
            .clearCookie("x-acess-token")
            .status(200)
            .json({ message: "Logout realizado com sucesso!" })
    } catch (err: any) {
        return res
            .status(err.statusCode || 500)
            .json({ message: err.message || "Internal server error!" })
    }
})

userRouter.put("", (req: Request, res: Response) => {
    res.status(204).json({ message: "Senha alterada com sucesso" })
})

userRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await userServ.deleteUser(+id)
        return res.status(204).json({ message: "Usuario deletado!" })
    } catch (err: any) {
        return res
            .status(err.statusCode || 500)
            .json({ message: err.message || "Internal server error!" })
    }
})

export default userRouter
