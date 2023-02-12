export interface Token {
  token: string;
}

export interface Book {
  id: number;
  author: string;
  name: string;
  year: number;
  category: string;
  genre: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  user: number;
  image: string;
}

export interface Profile {
  id: number;
  bio: string;
  location: string;
  birth_date: Date;
  user: number;
}
