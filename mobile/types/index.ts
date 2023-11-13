export interface PostType {
  title: string;
  description: string;
  createdAt: string;
  id: number;
}

export interface storeType {
  postState: {
    posts: PostType[];
  };
}

export interface navigationType {
  navigate?: (value: string, params?: unknown) => void;
  goBack?: () => void;
}
