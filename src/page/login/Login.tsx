import { useState } from "react";
// import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { Avatar, TextField, Typography } from "@mui/material";
// import { useNavigate } from 'react-router-dom';
// import { useMutationService } from '../../api/services/testMutation';

const Login = () => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  // const [error, setError] = useState('');

  // const mutation = useMutationService({
  //   resource: ['login'],
  // });
  // const navigate = useNavigate();

  // const handleLogin = useCallback(() => {
  //   if (credentials.user === 'admin' && credentials.password === 'admin') {
  //     mutation.mutate({
  //       user: credentials.user,
  //       password: credentials.password,
  //     });
  //   } else {
  //     setError('Invalid Credentials');
  //   }
  // }, [credentials, setError]);

  // useEffect(() => {
  //   if (mutation.data) {
  //     if (mutation.data.token) {
  //       localStorage.setItem('user', credentials.user);
  //       navigate('/dashboard');
  //     } else {
  //       setError('Invalid Credentials');
  //     }
  //   }
  // }, [mutation]);

  return (
    <div className="flex h-screen justify-center pt-40 bg-[#FCFCFE]">
      <div className="flex flex-col w-full mx-6 md:mx-0 h-[480px] lg:w-[400px] border rounded-xl px-12 pt-12 pb-28 items-center bg-white border-[#e0e0e3]">
        <Typography className="font-bold text-slate-400 text-2xl capitalize mb-8">
          Sagu Admin Portal
        </Typography>
        <div className="p-4">
          <Avatar
            sx={{ width: 70, height: 70 }}
            src="/images/android-chrome-512x512.png"
          />
        </div>
        <TextField
          id="standard-basic"
          label="User"
          variant="standard"
          onChange={(e) =>
            setCredentials({ ...credentials, user: e.target.value })
          }
        />
        <div className="mt-8">
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="standard"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        {/* <div className='mt-12'>
          <Button variant='contained' onClick={handleLogin}>
            SIGN IN
          </Button>
        </div>
        {error && (
          <Alert severity='error' className='mt-4'>
            {error}
          </Alert>
        )} */}
      </div>
    </div>
  );
};

export default Login;
