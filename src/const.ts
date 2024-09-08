export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum AppRoute {
  Main = '/',
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Level = {
  [QuestLevel.Easy]: 'лёгкий',
  [QuestLevel.Hard]: 'сложный',
  [QuestLevel.Medium]: 'средний',
};
