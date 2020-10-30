import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn  } from 'typeorm';
import User from './User';

@Entity('roles')
class Role {
  
  @PrimaryGeneratedColumn('increment',{unsigned: true})
  id: number;

  @Column()
  public name: string;

  @OneToMany(type => User, role => Role)
  public users: User[];

  @CreateDateColumn({name: 'created_at'})
  public createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  public updatedAt: Date;

}

export default Role;