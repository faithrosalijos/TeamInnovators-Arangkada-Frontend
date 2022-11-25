import { Stack, Typography } from "@mui/material";
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type StatusProps = {
  status: string,
  message: string,
}

const Status = ({ status, message }: StatusProps) => {
  return (
    <Stack spacing={2} direction="row">
      {status == "Pending" && <PendingOutlinedIcon fontSize="large" color="action" />}
      {status == "Approved" && <CheckCircleIcon fontSize="large" color="success" />}
      <div>
        <Typography variant="body1">Status: {status}</Typography>
        <Typography variant="body1" color="text.secondary">{message}</Typography>
      </div>
    </Stack>
  );
}

export default Status;