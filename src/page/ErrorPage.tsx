import { Button, Result, Typography } from "antd";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Result
      status="404"
      title={
        <div className="p-4 flex justify-center">
          <div className="w-80 flex justify-center">
            <img className="w-32" src="/images/logo.jpeg" />
          </div>
        </div>
      }
      subTitle={
        <Typography className="text-black">
          Sorry, something went wrong.
        </Typography>
      }
      extra={
        <Link to={"/"}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}
