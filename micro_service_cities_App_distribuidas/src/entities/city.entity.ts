import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'cities'
})
export class City {

@PrimaryGeneratedColumn('uuid')
id:string;

@Column({
    unique: true,
    nullable: false,
})
name:string;

}
