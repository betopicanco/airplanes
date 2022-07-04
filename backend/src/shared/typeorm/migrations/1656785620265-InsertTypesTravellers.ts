import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertTypesTravellers1656785620265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        "INSERT INTO types_travellers (name, is_draw_member) VALUES ('PASSAGEIRO(A)', FALSE)"
      );

      await queryRunner.query(
        "INSERT INTO types_travellers (name, is_draw_member) VALUES ('PILOTO(A)', TRUE)"
      );

      await queryRunner.query(
        "INSERT INTO types_travellers (name, is_draw_member) VALUES ('CO-PILOTO(A)', TRUE)"
      );

      await queryRunner.query(
        "INSERT INTO types_travellers (name, is_draw_member) VALUES ('COMISSARIO(A)', TRUE)"
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        ` 
          DELETE FROM "types_travellers" 
        `
      );
    }

}
