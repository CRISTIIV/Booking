import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesUpdateZoneBusy1686937960160 implements MigrationInterface {
    name = 'EntitiesUpdateZoneBusy1686937960160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" ADD "busy" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "busy"`);
    }

}
