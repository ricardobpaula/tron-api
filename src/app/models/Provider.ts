import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity('providers')
export default class Provider {
  
  @PrimaryGeneratedColumn({unsigned: true})
  public id!: number;

  @Column({nullable: false})
  public name!: string;

  @Column({
    length: 14, 
    unique:true,
    nullable: false
  })
  public cnpj!: string;

  @Column({
    length: 11, 
    unique:true,
    nullable: false
  })
  public phone!: string;

  @Column({
    unique:true,
    nullable: false
  })
  public email!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

}