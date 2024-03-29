import type { Dayjs } from 'dayjs';

import type { TASK_TYPES } from '@constants/task';

export interface ItemType {
  id: string;
  title: string;
  description: string;
  member: string;
  tools: string[];
  deadlines: { dates: null | (Dayjs | null)[]; dateStrings: string[] };
  type: TASK_TYPES;
}
