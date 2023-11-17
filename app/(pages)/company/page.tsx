import { CompanyInfoCard } from '@/app/(components)/(company)/company_info_card';
import { CompanyInfo } from '@/app/(model)/company_info';
import { Settings } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';

export default function CompanyPage() {
  const today = new Date();
  const sampleCompanyInfo: CompanyInfo[] = [
    {
      name: '企業名企業名企業名企業名企業名企業名企業名企業名企業名企業名企業名',
      memo: 'めもめもめもめも',
      status: 1,
      nextSchedule: {
        id: '1',
        title: '予定の内容',
        startDay: new Date(today.setDate(today.getDate() + 1)),
        endDay: new Date(today.setDate(today.getDate() + 10)),
      },
    },
    {
      name: '企業名',
      memo: 'めもめもめもめも',
      status: 1,
      nextSchedule: {
        id: '1',
        title: '予定の内容',
        startDay: new Date(today.setDate(today.getDate() + 1)),
        endDay: new Date(today.setDate(today.getDate() + 10)),
      },
    },
    {
      name: '企業名',
      memo: 'めもめもめもめも',
      status: 1,
      nextSchedule: {
        id: '1',
        title: '予定の内容',
        startDay: new Date(today.setDate(today.getDate() + 1)),
        endDay: new Date(today.setDate(today.getDate() + 10)),
      },
    },
    {
      name: '企業名',
      memo: 'めもめもめもめも',
      status: 1,
      nextSchedule: {
        id: '1',
        title: '予定の内容',
        startDay: new Date(today.setDate(today.getDate() + 1)),
        endDay: new Date(today.setDate(today.getDate() + 10)),
      },
    },
  ];

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Stack direction="row" justifyContent="space-between" alignItems="center" pr="20px">
          <Typography fontSize="28px">企業一覧</Typography>
          <IconButton>
            <Settings />
          </IconButton>
        </Stack>
        <Stack spacing="10px">
          {sampleCompanyInfo.map((elm) => (
            <CompanyInfoCard companyInfo={elm} key={elm.name} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}
