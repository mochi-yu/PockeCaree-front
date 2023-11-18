'use client';

import { News } from '@/app/(model)/news';
import { Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material';

interface Props {
  news: News;
}

export function NewsListCard(props: Props) {
  return (
    <Card>
      <CardActionArea
        onClick={() => {
          window.location.href = props.news.newsUrl;
        }}
      >
        <Stack direction="row">
          <CardMedia
            component="img"
            sx={{ width: '100px' }}
            src={props.news.imageUrl || '/NoImage.jpg'}
          />
          <Stack p="10px">
            <Typography fontSize="14px">{props.news.title}</Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
