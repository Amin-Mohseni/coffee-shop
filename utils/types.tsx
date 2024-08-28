export interface Comment {
  isAccept: boolean;
}

export type productType = {
  name: string;
  score: number;
  comments: Comment[];
  price: number;
  shortDescription: string;
  tags: [string];
  _id : string
};
