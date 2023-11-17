import { News } from '@/app/(model)/news';
import { Stack } from '@mui/material';
import { NewsListCard } from './NewsListCard';

interface Props {
  newses: News[];
}

export function NewsList(props: Props) {
  return (
    <>
      <Stack py="10px" spacing="10px">
        {props.newses.map((elm) => (
          <NewsListCard news={elm} key={elm.title} />
        ))}
      </Stack>
    </>
  );
}
