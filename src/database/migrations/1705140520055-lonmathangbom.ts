import { MigrationInterface, QueryRunner } from "typeorm";

export class Lonmathangbom1705140520055 implements MigrationInterface {
    name = 'Lonmathangbom1705140520055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
    }

}
