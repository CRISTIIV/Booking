import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntitiesName1687812714706 implements MigrationInterface {
    name = 'UpdateEntitiesName1687812714706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" RENAME COLUMN "fecha" TO "date"`);
        await queryRunner.query(`ALTER TABLE "spaces" RENAME COLUMN "state" TO "status"`);
        await queryRunner.query(`ALTER TABLE "zones" RENAME COLUMN "state" TO "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" RENAME COLUMN "status" TO "state"`);
        await queryRunner.query(`ALTER TABLE "spaces" RENAME COLUMN "status" TO "state"`);
        await queryRunner.query(`ALTER TABLE "bookings" RENAME COLUMN "date" TO "fecha"`);
    }

}
