import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'favorite_movies' })
export class FavoriteMovie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  writer: string;

  @Column()
  plot: string;

  @Column()
  language: string;

  @Column()
  external_id: string;

  @Column()
  type: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
