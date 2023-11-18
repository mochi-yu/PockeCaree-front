'use client';

import { FilterList } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { CompanySortModal } from './company_sort_modal';

export function CompanySortButton() {
  const [open, setOpen] = useState(false);

  const sortButtonHandler = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton onClick={sortButtonHandler}>
        <FilterList />
      </IconButton>
      <CompanySortModal open={open} handleClose={handleClose} />
    </>
  );
}
