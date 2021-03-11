import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./Post";
import { Comment } from "./Comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column('varchar')
  username: string;
  @Column('varchar')
  passwordDigest: string;
  @CreateDateColumn('time')
  createdAt: Date;
  @UpdateDateColumn('time')
  updatedAt: Date;
  @OneToMany(type => Post, post => post.author)
  posts: Post[];
  @OneToMany(type => Comment, comment => comment.user)
  comment: Comment[];
}
