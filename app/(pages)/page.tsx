import { Divider, Stack, Typography } from '@mui/material';
import { ScheduleList } from '@/app/(components)/(schedule)/schedule_list';
import { Schedule } from '@/app/(model)/schedule';
import { NewsList } from '@/app/(components)/(news)/NewsList';
import { News } from '@/app/(model)/news';

export default function TopPage() {
  const schedules: Schedule[] = [];
  const newses: News[] = [];

  return (
    <>
      <Stack p="30px" width="100%" spacing={2}>
        <Typography fontSize={24}>直近の予定</Typography>
        <ScheduleList schedules={schedules} />

        <Divider sx={{ width: '80%', borderBottomWidth: 2, mx: 'auto' }} />

        <Typography fontSize={24}>トップニュース</Typography>
        <NewsList newses={newses} />
      </Stack>
    </>
  );
}
