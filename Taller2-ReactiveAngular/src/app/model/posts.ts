import {Comments} from "./comments";

export interface Posts
{
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  comments?: Comments[];
}
