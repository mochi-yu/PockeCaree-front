'use client';

import { Add } from '@mui/icons-material';
import { Card, CardActionArea, Stack } from '@mui/material';
import Link from 'next/link';

export function CompanyAddCard() {
  const clickHandler = () => {};

  return (
    <>
      <Card sx={{ borderRadius: '20px', boxShadow: 0, height: '150px', border: 'dashed 2px' }}>
        <CardActionArea onClick={clickHandler} sx={{ height: '100%' }}>
          <Link href="/company/add" style={{ color: '#000', height: '100%' }}>
            <Stack alignItems="center" justifyContent="center" height="100%">
              <Add />
            </Stack>
          </Link>
        </CardActionArea>
      </Card>
    </>
  );
}
