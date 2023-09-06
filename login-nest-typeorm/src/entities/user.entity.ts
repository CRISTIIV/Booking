import { Entity,Column,PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { City } from './city.entity';
import { Exclude } from 'class-transformer';

@Entity({
    name: 'users',
})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    email: string;

    @Column()
    last_name: string;

    @Column()
    is_admin: boolean;

    @ManyToOne(() => City, city => city.id)
    City: string;

    validatePass(pass:string):boolean{
        if (pass !==this.password){
            return false
        }
        return true
        
    }
    getPayload(){
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            last_name: this.last_name,
            is_admin: this.is_admin,
            city: this.City,
        }
    
    }
}
