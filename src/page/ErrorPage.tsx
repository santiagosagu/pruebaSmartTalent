/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Result
      status='404'
      title={
        <div className='p-4 flex justify-center'>
          <img src='https://ordenes.issa.com.co/public/assets/images/logo-default.png' />
        </div>
      }
      subTitle='Sorry, something went wrong.'
      extra={
        <Link to={'/'}>
          <Button type='primary'>Back Home</Button>
        </Link>
      }
    />
  );
}
