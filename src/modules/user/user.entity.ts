import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'USER'],
    default: 'ADMIN',
  })
  role: string;
}
