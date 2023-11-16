import { News } from '@/app/(model)/news';
import { Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material';

interface Props {
  news: News;
}

export function NewsListCard(props: Props) {
  return (
    <Card>
      <CardActionArea>
        <Stack direction="row">
          <CardMedia
            component="img"
            sx={{ width: '100px' }}
            src={props.news.imageUrl || '/NoImage.jpg'}
          />
          <Stack p="10px">
            <Typography fontSize="16px">{props.news.title}</Typography>
            <Typography fontSize="12px" color="gray">
              {props.news.summary}
            </Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
