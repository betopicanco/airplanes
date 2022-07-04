import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddTravelIdToTravelsTravellets1656783914314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'travels_travellers',
      new TableColumn({
        name: 'travel_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'travels_travellers',
      new TableForeignKey({
        name: 'TravelTravelTravellers',
        columnNames: ['travel_id'],
        referencedTableName: 'travels',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('travels_travellers', 'TravelTravelTravellers');
    await queryRunner.dropColumn('travels_travellers', 'travel_id');
  }
}
