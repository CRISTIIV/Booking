import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesUpdateSpaceState1686938127440 implements MigrationInterface {
    name = 'EntitiesUpdateSpaceState1686938127440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spaces" ADD "state" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spaces" DROP COLUMN "state"`);
    }

}
