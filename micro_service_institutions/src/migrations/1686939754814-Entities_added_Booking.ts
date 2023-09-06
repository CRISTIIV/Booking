import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesAddedBooking1686939754814 implements MigrationInterface {
    name = 'EntitiesAddedBooking1686939754814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bookings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fecha" TIMESTAMP NOT NULL, "user" character varying NOT NULL, "state" boolean NOT NULL, "spaceId" uuid, CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_74215391af3858ab347890c3287" FOREIGN KEY ("spaceId") REFERENCES "spaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_74215391af3858ab347890c3287"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
    }

}
