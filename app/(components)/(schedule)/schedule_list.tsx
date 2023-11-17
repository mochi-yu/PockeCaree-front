import { Schedule } from '@/app/(model)/schedule';
import { Divider, Stack } from '@mui/material';
import { ScheduleListItem } from './schedule_list_item';

interface Props {
  schedules: Schedule[];
}

export function ScheduleList(props: Props) {
  var scheduleListItem = props.schedules.map((elm, i) => (
    <div key={'div_' + elm.title + elm.startDay?.toUTCString()}>
      <ScheduleListItem schedule={elm} key={'item_' + elm.title} />
      {i != props.schedules.length - 1 && (
        <Divider
          sx={{ width: '100%', borderBottomWidth: 1, mx: 'auto' }}
          key={'divider_' + elm.title}
        />
      )}
    </div>
  ));

  return (
    <>
      <Stack bgcolor="#DAE5E1" sx={{ borderRadius: '10px', boxShadow: 3 }} p="10px">
        {scheduleListItem}
      </Stack>
    </>
  );
}
