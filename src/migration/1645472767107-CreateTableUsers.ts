import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1645472767107 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'firstName',
                    type: 'varchar',
                    width: 255,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'lastName',
                    type: 'varchar',
                    width: 255,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'age',
                    type: 'int',
                },

                {
                    name: 'phone',
                    type: 'varchar',
                    width: 255,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'email',
                    type: 'varchar',
                    width: 255,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'password',
                    type: 'varchar',
                    width: 255,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },

                {
                    name: 'deleteAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users', true);
    }
}
