import { Box, Modal, Typography } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function CompanySortModal(props: Props) {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <Typography>aaaaa</Typography>
      </Box>
    </Modal>
  );
}
