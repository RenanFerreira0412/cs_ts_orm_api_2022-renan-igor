import { Entity, Column, PrimaryColumn, JoinTable, ManyToMany } from 'typeorm';
import Local from './Local';

@Entity('tb_objetivo')
export default class Objetivo {
    @PrimaryColumn('int')
    id: number;

    @Column("varchar", { length: 200 })
    descricao: string;

    @Column()
    pontos: number;

    @ManyToMany(() => Local)
    @JoinTable({ name: "tb_objetivo_local", joinColumn: { name: "objetivo_id", referencedColumnName: "id" }, inverseJoinColumn: { name: "local_id", referencedColumnName: "id" } })
    patentes: Local[];
}