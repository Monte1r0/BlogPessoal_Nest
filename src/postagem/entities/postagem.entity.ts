import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    id: number;

    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar vlor maior que 100
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // A data e hora sera definida automaticamente 
    data: Date;

}