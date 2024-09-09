export type FilterType = 'type' | 'level';

type FilterItem = {
  value: string;
  id: string;
  text: string;
  icon?: {
    width: number;
    height: number;
    url: string;
  };
};

export type Filter = {
  type: FilterType;
  title: string;
  default: string;
  items: FilterItem[];
};

export type FilterStore = {
  type: FilterType;
  value: string;
  default: string;
};
