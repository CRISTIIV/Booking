import { Entity,Column,PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity({
    name: 'cities',
})
export class City {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(()=>User, user => user.City)
    user: User;

    getPayload(){
        return {
            id: this.id,
            name: this.name,
        }
    }    
}
