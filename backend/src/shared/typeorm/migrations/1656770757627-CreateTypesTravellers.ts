import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTypesTravellers1656770757627 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'types_travellers',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: "uuid",
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'is_draw_member',
              type: 'bool'
            },
            {
              name: 'created_at',
              type: 'timestamp with time zone',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp with time zone',
              default: 'now()'
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('types_travellers');
    }
}
