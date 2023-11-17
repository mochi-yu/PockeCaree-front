'use client';

import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import { useState } from 'react';
import { News } from '@/app/(model)/news';
import { NewsList } from '@/app/(components)/(news)/NewsList';

export default function NewsPage() {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [value, setValue] = useState(0);

  const onSlideChangeHandler = (index: number) => {
    setValue(index);
  };

  const onTabChange = (_: any, newValue: any) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };

  const today = new Date();
  const tabList = ['トップ', '企業名', '企業名', '企業名企業名企業名企業名企業名'];
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

  return (
    <>
      <Stack bgcolor="#CDE8E1">
        {/* タブ */}
        <Box sx={{ width: '100%', bgcolor: 'white' }}>
          <Tabs value={value} onChange={onTabChange} variant="scrollable">
            {tabList.map((elm, i) => (
              <Tab
                label={
                  <Typography fontSize="14px" noWrap width="100px">
                    {elm}
                  </Typography>
                }
                sx={{ width: '100px' }}
                value={i}
                key={elm}
              />
            ))}
          </Tabs>
        </Box>

        {/* コンテンツ */}
        <Stack p="20px">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(index) => onSlideChangeHandler(index.activeIndex)}
            onSwiper={(swiper) => {
              const swiperInstance = swiper;
              setSwiper(swiperInstance);
            }}
            style={{ width: '100%' }}
          >
            {tabList.map((elm, i) => (
              <SwiperSlide key={elm}>
                <Stack width="100%">
                  <NewsList newses={sampleNewses} />
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
