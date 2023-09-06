import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Institution } from './institution.entity'
import { Space } from './space.entity'

@Entity({name:'zones'})
export class Zone {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    status:boolean

    @Column()
    name:string;

    @Column()
    description:string;


    @ManyToOne(()=> Institution, Institution=> Institution.zone)
    institution:string

    @OneToMany(()=> Space, space=> space.zone)
    space:Space
}
