import { Avatar, Typography } from '@mui/material';
import { memo } from 'react';

interface IProps {
  image: string;
  name: string;
}

const Profile = memo(({ image, name }: IProps) => {
  return (
    <div className='flex gap-2 items-center'>
      <Avatar alt='Remy Sharp' src={image} />
      <Typography>{name}</Typography>
    </div>
  );
});

export default Profile;
