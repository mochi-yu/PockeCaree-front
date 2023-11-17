import { status2color, status2string } from '@/app/(model)/company_info';
import { Stack, Typography } from '@mui/material';

interface Props {
  status: number;
}

export function CompanyStatus(props: Props) {
  return (
    <Stack
      bgcolor={status2color[props.status]}
      px="10px"
      borderRadius="15px"
      height="100%"
      minWidth="fit-content"
    >
      <Typography fontSize="16px" py="0px">
        {status2string[props.status]}
      </Typography>
    </Stack>
  );
}
