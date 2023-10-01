import {Users} from "./users";

export interface Comments
{
  id: number;
  body: string;
  postId: number;
  userId: Users;
}
