import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddTypeTravellerIdToTravelsTravellers1656784544307 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'travels_travellers',
      new TableColumn({
        name: 'type_traveller_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'travels_travellers',
      new TableForeignKey({
        name: 'TypesTravelletsTravelsTravellers',
        columnNames: ['type_traveller_id'],
        referencedTableName: 'types_travellers',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'travels_travellers',
      'TypesTravelletsTravelsTravellers',
    );
    await queryRunner.dropColumn('travels_travellers', 'type_traveller_id');
  }

}
