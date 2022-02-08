export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  location: string;
  avatarURL: string;
  githubUsername: string;
  followers(items: number, lastId?: number): User[];
  following(items: number, lastId?: number): User[];
  totalFollowers: number;
  totalFollowing: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommonOutput {
  ok: boolean;
  error?: string;
}

export interface TokenOutput extends CommonOutput {
  token?: string;
}
