import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddTravellerIdToTravelsTravellers1656784173118 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'travels_travellers',
      new TableColumn({
        name: 'traveller_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'travels_travellers',
      new TableForeignKey({
        name: 'TravellerTravelsTravellers',
        columnNames: ['traveller_id'],
        referencedTableName: 'travellers',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'travels_travellers',
      'TravellerTravelsTravellers',
    );
    await queryRunner.dropColumn('travels_travellers', 'traveller_id');
  }

}
