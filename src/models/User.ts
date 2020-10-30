import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn  } from 'typeorm';
import Role from './Role';

@Entity('users')
class User {
  
  @PrimaryGeneratedColumn('increment',{unsigned: true})
  id: number;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;
  
  @Column({ name: 'last_name', nullable: false })
  lastName: string;
  
  @Column({ name: 'user_name', nullable: false })
  userName: string;

  @Column({ unique:true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  avatar: string;

  @OneToMany(type => Role, users => User)
  @JoinColumn({name: 'role_id'})
  role: Role;

  @CreateDateColumn({name: 'created_at'})
  public createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  public updatedAt: Date;

}

export default User;