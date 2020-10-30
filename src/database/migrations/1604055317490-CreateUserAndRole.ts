import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserAndRole1604055317490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'roles',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        unsigned: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    },
                    { 
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    { 
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]                
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        unsigned: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'role_id',
                        type: 'integer',
                        unsigned: true,
                        isNullable: false
                    },
                    { 
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    { 
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        );

        await queryRunner.createForeignKey('users', new TableForeignKey({
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'roles',
            onDelete: 'CASCADE'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropForeignKey('users', 'role_id');

        await queryRunner.dropTable('users');
        
        await queryRunner.dropTable('roles');

    }

}
