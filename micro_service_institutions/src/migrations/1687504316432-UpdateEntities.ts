import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1687504316432 implements MigrationInterface {
    name = 'UpdateEntities1687504316432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "zones" DROP COLUMN "busy"`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD "bloque_horario" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institutions" ADD "category" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institutions" ALTER COLUMN "admin" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "institutions" ALTER COLUMN "admin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institutions" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP COLUMN "bloque_horario"`);
        await queryRunner.query(`ALTER TABLE "zones" ADD "busy" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "zones" ADD "capacity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "zones" ADD "category" character varying NOT NULL`);
    }

}
