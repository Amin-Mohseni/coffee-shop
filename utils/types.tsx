export interface Comment {
  isAccept: boolean;
}

export type productType = {
  name: string;
  score: number;
  smell: string;
  comments: Comment[];
  price: number;
  shortDescription: string;
  tags: [string];
  _id: string;
};
