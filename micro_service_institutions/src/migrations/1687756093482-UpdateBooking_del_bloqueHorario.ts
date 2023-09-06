import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateBookingDelBloqueHorario1687756093482 implements MigrationInterface {
    name = 'UpdateBookingDelBloqueHorario1687756093482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP COLUMN "bloque_horario"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" ADD "bloque_horario" integer NOT NULL`);
    }

}
