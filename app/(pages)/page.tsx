import { Divider, Stack, Typography } from '@mui/material';
import { ScheduleList } from '@/app/(components)/(schedule)/schedule_list';
import { Schedule } from '@/app/(model)/schedule';
import { NewsList } from '@/app/(components)/(news)/NewsList';
import { News } from '@/app/(model)/news';

export default function TopPage() {
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
  const sampleNewses: News[] = [
    {
      id: '1',
      imageUrl: 'https://avatars.githubusercontent.com/u/43375000',
      title: '記事タイトル１',
      summary: '記事の要約',
      postDate: today,
    },
    {
      id: '2',
      imageUrl: undefined,
      title: '記事タイトル２',
      summary: '記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約',
      postDate: today,
    },
    {
      id: '3',
      imageUrl: 'https://avatars.githubusercontent.com/u/43375000',
      title: '記事タイトル３',
      summary: '記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約',
      postDate: today,
    },
    {
      id: '4',
      imageUrl: undefined,
      title: '記事タイトル４',
      summary: '記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約記事の要約',
      postDate: today,
    },
  ];

  const schedules: Schedule[] = sampleSchedules;
  const newses: News[] = sampleNewses;

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize={24}>直近の予定</Typography>
        <ScheduleList schedules={schedules} />

        <Divider sx={{ width: '100%', borderBottomWidth: 2, mx: 'auto' }} />

        <Typography fontSize={24}>トップニュース</Typography>
        <NewsList newses={newses} />
      </Stack>
    </>
  );
}
