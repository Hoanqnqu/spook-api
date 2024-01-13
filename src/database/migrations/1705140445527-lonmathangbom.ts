import { MigrationInterface, QueryRunner } from "typeorm";

export class Lonmathangbom1705140445527 implements MigrationInterface {
    name = 'Lonmathangbom1705140445527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`role\` enum ('ADMIN', 'USER') NOT NULL DEFAULT 'ADMIN', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
