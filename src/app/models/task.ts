import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  title: string;
  executor?: string | null;
  start?: string;
  end?: string;

  constructor(
    title: string,
    executor?: string | null,
    start?: string,
    end?: string
  ) {
    this.id = uuidv4();
    this.title = title;
    this.executor = executor ?? null;
    this.start = start;
    this.end = end;
  }
}