import { Button } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentLogout = memo(() => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Button
      type='link'
      className='text-black cursor-pointer'
      onClick={handleLogout}>
      Logout
    </Button>
  );
});

export default ContentLogout;
