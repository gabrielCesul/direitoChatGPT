import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684857381116 implements MigrationInterface {
    name = 'Default1684857381116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" SERIAL NOT NULL, "nome" character varying(60) NOT NULL, "password" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_accounts"`);
    }

}
