import { ScheduleCalender } from '@/app/(components)/(schedule)/schedule_calender';
import { ScheduleList } from '@/app/(components)/(schedule)/schedule_list';
import { Schedule } from '@/app/(model)/schedule';
import { Divider, Stack, Typography } from '@mui/material';

export default function SchedulePage() {
  const today = new Date();
  const sampleSchedules: Schedule[] = [
    {
      id: '1',
      title: '予定の内容',
      startDay: new Date(today.setDate(today.getDate() + 1)),
      endDay: new Date(today.setDate(today.getDate() + 10)),
    },
    {
      id: '2',
      title: '予定の内容',
      startDay: new Date(today.setDate(today.getDate() + 1)),
      endDay: undefined,
    },
    {
      id: '3',
      title: 'ながーーーーーーーーーーーーーい予定の内容',
      startDay: undefined,
      endDay: undefined,
    },
  ];

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize="28px">スケジュール</Typography>

        <Typography fontSize="24px">予定の一覧</Typography>
        <ScheduleList schedules={sampleSchedules} />
        <Divider sx={{ width: '100%', borderBottomWidth: 2, mx: 'auto' }} />

        <Typography fontSize="24px">カレンダー</Typography>
        <ScheduleCalender />
      </Stack>
    </>
  );
}
