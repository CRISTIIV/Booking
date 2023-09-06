import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";
//import {Exclude} from 'class-transformer';


@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    // @Exclude()
    password: string;

    @Column()
    email: string;

    @Column()
    last_name: string;

    @Column()
    is_admin: boolean;

    @Column()
    City : string;

    @Column()
    is_active: boolean;

    validatePassword(password:string):boolean{
        return this.password === password;
    }

    getPayload(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            last_name: this.last_name,
            is_admin: this.is_admin,
            city: this.City,
        }
    
    }

}
