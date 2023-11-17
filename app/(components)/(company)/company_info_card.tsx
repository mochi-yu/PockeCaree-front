import { CompanyInfo } from '@/app/(model)/company_info';
import { Card, CardActionArea, Stack, Typography } from '@mui/material';
import { CompanyStatus } from './company_status';
import { ScheduleListItem } from '../(schedule)/schedule_list_item';
import { CalendarMonth } from '@mui/icons-material';

interface Props {
  companyInfo: CompanyInfo;
}

export function CompanyInfoCard(props: Props) {
  return (
    <>
      <Card sx={{ borderRadius: '20px', bgcolor: '#ECEEEC' }}>
        <CardActionArea sx={{ p: '20px' }}>
          <Stack spacing="10px">
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize="22px" noWrap>
                {props.companyInfo.name}
              </Typography>
              <CompanyStatus status={props.companyInfo.status} />
            </Stack>
            <Typography fontSize="14px">{props.companyInfo.memo}</Typography>

            <Stack>
              <Stack direction="row" spacing="5px">
                <Typography fontSize="16px">次の予定：</Typography>
                <Typography fontSize="16px">{props.companyInfo.nextSchedule.title}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                {(props.companyInfo.nextSchedule.startDay ||
                  props.companyInfo.nextSchedule.endDay) && (
                  <>
                    <CalendarMonth />
                    <Typography noWrap fontSize="14px">
                      {(props.companyInfo.nextSchedule.startDay?.toLocaleDateString() || '　') +
                        ' ～ ' +
                        (props.companyInfo.nextSchedule.endDay?.toLocaleDateString() || '')}
                    </Typography>
                  </>
                )}
              </Stack>
            </Stack>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}
