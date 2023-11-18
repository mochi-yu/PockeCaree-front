import { CompanyAddCard } from '@/app/(components)/(company)/company_add_card';
import { CompanyInfoCard } from '@/app/(components)/(company)/company_info_card';
import { CompanySortButton } from '@/app/(components)/(company)/company_sort_button';
import { CompanyInfo, CompanySummaryResponseParam } from '@/app/(model)/company_info';
import { Stack, Typography } from '@mui/material';
import axios from '@/app/(util)/axios';
import { AxiosResponse } from 'axios';

export default async function CompanyPage() {
  const companyList = await axios
    .get('/company?userID=1')
    .then((res: AxiosResponse<CompanySummaryResponseParam[]>) => {
      const { data, status } = res;
      return data;
    });

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Stack direction="row" justifyContent="space-between" alignItems="center" pr="20px">
          <Typography fontSize="28px">企業一覧</Typography>
          <CompanySortButton />
        </Stack>
        <Stack spacing="10px">
          {companyList.map((elm) => (
            <CompanyInfoCard companyInfo={elm} key={elm.companyName} />
          ))}
          <CompanyAddCard />
        </Stack>
      </Stack>
    </>
  );
}
