import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesUpdateZoneCapacity1686937644490 implements MigrationInterface {
    name = 'EntitiesUpdateZoneCapacity1686937644490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" ADD "capacity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "capacity"`);
    }

}
