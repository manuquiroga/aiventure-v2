export interface Story {
  id: string;
  type: string;
  place: string;
  tags: string[];
  mainQuest: string;
  extras?: Extra[];
  title?: string;
  text?: string;
  inputCount: number;
}

export interface Extra {
  name?: string;
  alignment?: "ally" | "neutral" | "enemy";
  gender?: string;
  class?: string;
  role?: string;
  description?: string;
}
