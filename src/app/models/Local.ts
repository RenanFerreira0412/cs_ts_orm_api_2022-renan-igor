import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import Mapa from './Mapa';

@Entity('tb_local')
export default class Local {
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: String;

    @Column('text')
    latitude: String;

    @Column('text')
    longitude: String;
}