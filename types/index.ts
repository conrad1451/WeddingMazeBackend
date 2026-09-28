// src/types/index.ts

export interface Score {
  id: string;
  userId: string;
  points: number;
  createdAt: Date;
}

export interface UserScore {
  userId: string;
  username: string;
  bestTime: number;
  totalGames: number;
  averageTime: number;
}

export interface AuthToken {
  sub: string;
  email: string;
  name: string;
}