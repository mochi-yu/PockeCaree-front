'use client';

import { Loading } from '@/app/(components)/(layout)/loadnig';
import { status2string } from '@/app/(model)/company_info';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreateCompanyRequestParam } from '@/app/(model)/company_info';

import axios from '@/app/(util)/axios';
import { AxiosResponse } from 'axios';
import axiosOrigin from 'axios';

const convert = require('xml-js');

export default function AddCompanyPage() {
  const [name, setName] = useState<string>('');
  const [myPage, setMyPage] = useState<string>('');
  const [status, setStatus] = useState<number>(0);
  const [memo, setMemo] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const companyNameHandler = (e: any) => {
    setName(e.target.value);
  };
  const companyStatusHandler = (e: any) => {
    setStatus(e.target.value);
  };
  const myPageURLHandler = (e: any) => {
    setMyPage(e.target.value);
  };
  const memoHandler = (e: any) => {
    setMemo(e.target.value);
  };

  const addCompanyHandler = async () => {
    setIsLoading(true);

    const req: CreateCompanyRequestParam = {
      companyName: name,
      mypageURL: myPage,
      memo: memo,
      status: status,
    };

    await axios.post('/company', req).then((res: AxiosResponse) => {
      console.log(res);
    });

    router.push('/company');
  };

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize="28px">企業を追加</Typography>

        <Stack>
          <Stack direction="row">
            <Typography fontSize="20px">企業名</Typography>
            <Typography fontSize="10px" color="red">
              ※
            </Typography>
          </Stack>
          <TextField value={name} onChange={companyNameHandler} />
        </Stack>

        <Stack>
          <Typography fontSize="20px">ステータス</Typography>
          <TextField select value={status} onChange={companyStatusHandler}>
            {status2string.map((elm, i) => (
              <MenuItem key={elm} value={i}>
                {elm}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack>
          <Typography fontSize="20px">マイページURL</Typography>
          <TextField value={myPage} onChange={myPageURLHandler} />
        </Stack>

        <Stack>
          <Typography fontSize="20px">メモ</Typography>
          <TextField value={memo} onChange={memoHandler} multiline />
        </Stack>

        <Stack alignItems="center">
          <Button
            variant="contained"
            onClick={addCompanyHandler}
            disabled={name == ''}
            sx={{ height: '40px', width: '80%', px: 'auto' }}
          >
            追加
          </Button>
        </Stack>
      </Stack>
      {isLoading ? <Loading /> : <></>}
    </>
  );
}
