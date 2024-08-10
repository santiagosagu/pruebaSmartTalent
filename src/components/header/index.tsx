import { Avatar, Box } from "@mui/material";
import { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "antd";
// import ContentLogout from "../layout/ContentLogout";
// import Profile from "../layout/Profile";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <div className="w-full flex justify-center fixed bg-white z-[1000] border border-b-black">
      <Box
        component="section"
        sx={{ p: 2 }}
        className="w-full flex justify-between  bg-white max-w-[1280px]"
      >
        <div
          className="cursor-pointer block md:hidden"
          // onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </div>
        <div className="p-0 flex items-center gap-4">
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="/images/android-chrome-512x512.png"
          />
          <Typography className="font-bold text-base">Viajes Sagu</Typography>
        </div>
        <div className="p-0 lg:flex items-center gap-4 hidden ">
          <Link className="font-semibold" to={"/"}>
            Viajes
          </Link>
          <Link className="font-semibold" to={"/hoteles"}>
            Hoteles
          </Link>
        </div>
        {/* <Popover content={<ContentLogout />}>
          <div className="cursor-pointer">
            <Profile
              image={"https://mui.com/static/images/avatar/2.jpg"}
              name={"Santiago G"}
            />
          </div>
        </Popover> */}
      </Box>
    </div>
  );
});

export default Header;
