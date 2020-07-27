export type TranslateProject = {
  id: string;
  name: string;
  createTime: number;
  updateTime: number;
}

export type LanguageType = {
  id: string;
  key: string;
  name: string;
  label: string;
  short: string;
  editing: boolean; // todo move outside
}
