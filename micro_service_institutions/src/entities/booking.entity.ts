import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Space } from './space.entity';

@Entity({name:'bookings'})
export class Booking {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    date:Date;

    @ManyToOne(()=>Space, space => space.id)
    space:string;

    @Column()
    user:string;

    @Column()
    state:boolean;
}
