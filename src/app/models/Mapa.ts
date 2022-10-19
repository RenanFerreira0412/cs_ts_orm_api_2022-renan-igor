import { Entity, Column, PrimaryColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import Local from './Local';

@Entity('tb_mapa')
export default class Mapa {
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: String;

    @ManyToMany(() => Local)
    @JoinTable({ name: "tb_mapa_local", joinColumn: { name: "mapa_id", referencedColumnName: "id" }, inverseJoinColumn: { name: "local_id", referencedColumnName: "id" } })
    patentes: Local[];
}