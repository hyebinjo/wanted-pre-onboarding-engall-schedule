import { useState, useEffect } from 'react';
import { scheduleService } from '../api/axiosInstance';
import { getStartEndTimeObj } from '../utils/getTimeFormat';
import { jsonScheduleType } from '../interfaces/types';

export default function useSchedule() {
  const [jsonData, setJsonData] = useState<jsonScheduleType>([]);
  const [schedule, setSchedule] = useState({});

  const getJsonData = async () => {
    const data = await scheduleService.get();
    setJsonData(data);
  };

  const formatSchedule = () => {
    let initialData = { mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: [] };
    for (const key in initialData) {
      const dayLectures = jsonData
        .filter((lecture: any) => lecture.day === key)
        .sort((a: string, b: string) => new Date(a.startTime) - new Date(b.startTime))
        .map((lecture: any) => {
          return { ...lecture, timeRange: getStartEndTimeObj(new Date(lecture.startTime)) };
        });
      initialData[key as keyof typeof initialData] = dayLectures;
    }
    setSchedule(initialData);
  };

  const deleteLecture = async (id: number) => {
    await scheduleService.delete(id);
    const newSchedule = jsonData.filter((lecture) => lecture.id !== id);
    setJsonData(newSchedule);
  };

  useEffect(() => {
    getJsonData();
  }, []);

  useEffect(() => {
    formatSchedule();
  }, [jsonData]);

  return { schedule, deleteLecture };
}
