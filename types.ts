export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Command {
  command: string;
  description: string;
}

export interface Rule {
  title: string;
  description:string;
}

export interface Server {
  name: string;
  ip: string;
  players: string;
  ping: string;
  imageUrl?: string;
}