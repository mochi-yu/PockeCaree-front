import { Divider, Stack, Typography } from '@mui/material';
import { ScheduleList } from '@/app/(components)/(schedule)/schedule_list';
import { Schedule } from '@/app/(model)/schedule';
import { NewsList } from '@/app/(components)/(news)/NewsList';
import { News } from '@/app/(model)/news';
import axios from '@/app/(util)/axios';
import axiosOrigin from 'axios';
import { AxiosResponse } from 'axios';

const convert = require('xml-js');

export default async function TopPage() {
  // const schedules = await axios
  //   .get('/schedule?companyID=jayWT4BLHnfgcBi9T4y78T')
  //   .then((res: AxiosResponse<Schedule[]>) => {
  //     const { data, status } = res;
  //     // console.log(res.data);
  //     return data;
  //   });

  const today = new Date();
  const finishDate = new Date(today.getDate() + 5);
  const schedules: Schedule[] = [
    {
      title: 'ESの作成',
      startDate: today.getTime(),
      endDate: today.getTime(),
    },
    {
      title: 'エントリー',
      startDate: today.getTime(),
      endDate: today.getTime(),
    },
    {
      title: '面接',
      startDate: today.getTime(),
      endDate: today.getTime(),
    },
  ];

  const newsList: News[] = await axiosOrigin
    .get('https://news.google.com/rss/search?hl=ja&gl=JP&q=%E5%B0%B1%E6%B4%BB&ceid=JP:ja')
    .then((res) => {
      const dataJsonText = convert.xml2json(res.data, { compact: true, spaces: 4 });
      const json = JSON.parse(dataJsonText);

      var tempList: News[] = [];
      for (var i = 0; i < 4; i++) {
        tempList.push({
          imageUrl: undefined,
          title: json.rss.channel.item[i].title._text,
          newsUrl: json.rss.channel.item[i].link._text,
        });
      }

      return tempList;
    });

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize={24}>直近の予定</Typography>
        <ScheduleList schedules={schedules} />

        <Divider sx={{ width: '100%', borderBottomWidth: 2, mx: 'auto' }} />

        <Typography fontSize={24}>トップニュース</Typography>
        <NewsList newses={newsList} />
      </Stack>
    </>
  );
}
