'use client';

import { Schedule } from '@/app/(model)/schedule';
import { CalendarMonth } from '@mui/icons-material';
import { Card, CardActionArea, Stack, Typography } from '@mui/material';

interface Props {
  schedule: Schedule;
}

export function ScheduleListItem(props: Props): React.ReactNode {
  const clickHandler = function () {
    console.log('clicked: ' + props.schedule.title);
  };

  const startDate = new Date(props.schedule.startDate!);
  const endDate = new Date(props.schedule.endDate!);

  return (
    <>
      <Card sx={{ bgcolor: 'rgba(0,0,0,0)', boxShadow: 0 }}>
        <CardActionArea onClick={clickHandler} sx={{ p: '10px' }}>
          <Typography noWrap fontSize="16px">
            {props.schedule.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {(props.schedule.startDate || props.schedule.endDate) && (
              <>
                <CalendarMonth />
                <Typography noWrap fontSize="14px">
                  {(startDate.toLocaleDateString() || '　') +
                    ' ～ ' +
                    (endDate.toLocaleDateString() || '')}
                </Typography>
              </>
            )}
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}
