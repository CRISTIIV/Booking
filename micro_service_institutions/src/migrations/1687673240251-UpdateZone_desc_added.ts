import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateZoneDescAdded1687673240251 implements MigrationInterface {
    name = 'UpdateZoneDescAdded1687673240251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "description"`);
    }

}
