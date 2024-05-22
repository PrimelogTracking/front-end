export type HistoryEntry = {
  id: string;
  title: string;
  description: string;
  step: number;
  createdAt: string;
  updatedAt: string;
};

export type Code = {
  id: string;
  value: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  history: HistoryEntry[];
};