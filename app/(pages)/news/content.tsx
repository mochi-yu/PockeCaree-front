'use client';

import { News } from '@/app/(model)/news';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import { useState } from 'react';
import { NewsList } from '@/app/(components)/(news)/NewsList';

interface Props {
  companyList: string[];
  newsList: News[][];
}

export function NewsPageContent(props: Props) {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [value, setValue] = useState(0);

  const onSlideChangeHandler = (index: number) => {
    setValue(index);
  };

  const onTabChange = (_: any, newValue: any) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };

  return (
    <>
      <Stack bgcolor="#CDE8E1">
        {/* タブ */}
        <Box sx={{ width: '100%', bgcolor: 'white' }}>
          <Tabs value={value} onChange={onTabChange} variant="scrollable">
            {props.companyList.map((elm, i) => (
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
            {props.companyList.map((elm, i) => (
              <SwiperSlide key={elm}>
                <Stack width="100%">
                  <NewsList newses={props.newsList[i]} />
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
