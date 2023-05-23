import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("user_accounts")
export class User_account {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 60 })
    nome: string

    @Column({ type: "varchar", length: 60 })
    password: string

    @Column({ type: "varchar", length: 60 })
    email: string
}
