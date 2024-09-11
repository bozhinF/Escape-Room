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
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
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

export const Type = {
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.Detective]: 'Детектив',
  [QuestType.SciFi]: 'Sci-fi',
};

export enum NameSpace {
  User = 'USER',
  Quests = 'QUESTS',
}

export enum Endpoint {
  Login = '/login',
  Quests = '/quest',
  Logout = '/logout',
  Quest = '/quest',
}

export enum RequestStatus {
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
  Idle = 'Idle',
}

export enum PasswordLength {
  Min = 3,
  Max = 15,
}
