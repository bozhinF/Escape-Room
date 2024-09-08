export type QuestLevelValue = 'easy' | 'medium' | 'hard';
export type QuestTypeValue =
  | 'adventures'
  | 'horror'
  | 'mystic'
  | 'detective'
  | 'sci-fi';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevelValue;
  type: QuestTypeValue;
  peopleMinMax: [number, number];
};
