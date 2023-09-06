import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Zone } from './zone.entity';


@Entity({
    name: 'institutions'
})
export class Institution {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({unique: true})
    name:string;

    @Column()
    category:string

    @Column({nullable: true})
    admin:string

    @Column()
    city:string

    @OneToMany(()=>Zone, zone => zone.id)
    zone :Zone

    
}
