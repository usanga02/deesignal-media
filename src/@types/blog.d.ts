export interface IBlog {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  imgUrl: string;
  createdAt: string;
}
export type BlogContextType = {
  blog: IBlog | null;
  setBlog: any;
};
