import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAirplanes1656711610589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'airplanes',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: "uuid",
              default: 'uuid_generate_v4()'
            },
            {
              name: 'place',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'model',
              type: 'varchar'
            },
            {
              name: 'airline',
              type: 'varchar',
            },
            {
              name: 'baggage_limit',
              type: 'int',
            },
            {
              name: 'seat_limit',
              type: 'int',
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
      await queryRunner.dropTable('airplanes');
    }
}
