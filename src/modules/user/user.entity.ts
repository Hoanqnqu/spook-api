import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  firebaseUID: string;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'USER'],
    default: 'ADMIN',
  })
  role: string;
}
