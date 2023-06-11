export interface IBlog {
  // id: number;
  title: string;
  subtitle: string;
  body: string;
  imgUrl: {
    asset: {
      url;
    };
  };
  publishedAt: string;
}
export interface IWork {
  // id: number;
  title: string;
  category: string;
  note?: string;
  whatwedid?: string;
  whatweused?: string;
  outcome?: string;
  gallery: string[];
  videoUrl: string;
  imgUrl: {
    asset: {
      url;
    };
  };
  publishedAt: string;
}
export type BlogContextType = {
  blog: IBlog | null;
  work: IWork | null;
  setBlog: any;
  setWork: any;
};
