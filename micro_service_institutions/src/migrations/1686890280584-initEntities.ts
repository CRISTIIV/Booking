import { MigrationInterface, QueryRunner } from "typeorm";

export class InitEntities1686890280584 implements MigrationInterface {
    name = 'InitEntities1686890280584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "spaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "zoneId" uuid, CONSTRAINT "PK_dbe542974aca57afcb60709d4c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "zones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category" character varying NOT NULL, "state" boolean NOT NULL, "institutionId" uuid, CONSTRAINT "PK_880484a43ca311707b05895bd4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institutions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "city" character varying NOT NULL, "admin" character varying NOT NULL, CONSTRAINT "UQ_15c98649276025998cd1acaf61c" UNIQUE ("name"), CONSTRAINT "PK_0be7539dcdba335470dc05e9690" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "spaces" ADD CONSTRAINT "FK_5a33acd6550b744b38e66936b01" FOREIGN KEY ("zoneId") REFERENCES "zones"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "zones" ADD CONSTRAINT "FK_5086b6aa0b9395b1afcdc969d8f" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "zones" DROP CONSTRAINT "FK_5086b6aa0b9395b1afcdc969d8f"`);
        await queryRunner.query(`ALTER TABLE "spaces" DROP CONSTRAINT "FK_5a33acd6550b744b38e66936b01"`);
        await queryRunner.query(`DROP TABLE "institutions"`);
        await queryRunner.query(`DROP TABLE "zones"`);
        await queryRunner.query(`DROP TABLE "spaces"`);
    }

}
