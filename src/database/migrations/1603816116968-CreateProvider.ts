import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProvider1603816116968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'providers',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        unsigned: true,
                        generationStrategy: 'increment',
                    },
                    { 
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    { 
                        name: 'cnpj',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                        length: '14'
                    },
                    { 
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                        length: '11'
                    },
                    { 
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    { 
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    { 
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('providers');
    }

}
