import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddAirplaneIdToTravels1656773438459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'travels',
        new TableColumn({
          name: 'airplane_id',
          type: 'uuid',
          isNullable: true,
        })
      );

      await queryRunner.createForeignKey(
        'travels',
        new TableForeignKey({
          name: 'TravelsAirplane',
          columnNames: ['airplane_id'],
          referencedTableName: 'airplanes',
          referencedColumnNames: ['id'],
          onDelete: 'SET NULL',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('travels', 'TravelsAirplane');
      await queryRunner.dropColumn('travels', 'airplane_id');
    }

}
