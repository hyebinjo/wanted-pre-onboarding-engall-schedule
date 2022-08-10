export type TimeRange = { start: string; end: string };

export type Days = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type jsonLecture = {
  id: number;
  day: Days;
  startTime: string;
};

export type jsonScheduleType = jsonLecture[];
