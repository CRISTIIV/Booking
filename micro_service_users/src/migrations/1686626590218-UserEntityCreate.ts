import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntityCreate1686626590218 implements MigrationInterface {
    name = 'UserEntityCreate1686626590218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "last_name" character varying NOT NULL, "is_admin" boolean NOT NULL, "City" character varying NOT NULL, "is_active" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
