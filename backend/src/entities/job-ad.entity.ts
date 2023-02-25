import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobAd {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column('text', {
    array: true,
    default: [],
  })
  skills: string[];

  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  })
  status: 'draft' | 'published' | 'archived';
}
