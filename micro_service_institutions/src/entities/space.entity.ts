import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Zone } from './zone.entity';
import { Booking } from './booking.entity';


@Entity({name:'spaces'})
export class Space {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;
    
    @Column()
    number:number;

    @Column()
    status:boolean;

    @ManyToOne(()=>Zone, zone => zone.id)
    zone: string;

    @OneToMany(()=>Booking, Booking => Booking.space)
    bookings: string;
}
