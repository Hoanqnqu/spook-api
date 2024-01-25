import { MigrationInterface, QueryRunner } from "typeorm";

export class Lonmathangbom1706171727703 implements MigrationInterface {
    name = 'Lonmathangbom1706171727703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`firebaseUID\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`firebaseUID\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL DEFAULT '1'`);
    }

}
