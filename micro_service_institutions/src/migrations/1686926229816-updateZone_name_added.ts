import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateZoneNameAdded1686926229816 implements MigrationInterface {
    name = 'UpdateZoneNameAdded1686926229816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "name"`);
    }

}
