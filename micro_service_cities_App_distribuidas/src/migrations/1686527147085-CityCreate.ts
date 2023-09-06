import { MigrationInterface, QueryRunner } from "typeorm";

export class CityCreate1686527147085 implements MigrationInterface {
    name = 'CityCreate1686527147085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_a0ae8d83b7d32359578c486e7f6" UNIQUE ("name"), CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cities"`);
    }

}
