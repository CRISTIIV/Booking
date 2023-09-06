import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesUpdateSpaceNumber1686937251980 implements MigrationInterface {
    name = 'EntitiesUpdateSpaceNumber1686937251980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spaces" ADD "number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spaces" DROP COLUMN "number"`);
    }

}
