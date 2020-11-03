import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertRoles1604169278755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`insert into roles(name) values ('Administrator')`);
        queryRunner.query(`insert into roles(name) values ('Comum')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`delete from roles where name in ('Administrator', 'Comum')`);
    }

}
