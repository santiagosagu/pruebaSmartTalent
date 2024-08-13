import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { Avatar, Box, Drawer, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Popover, Typography } from "antd";
import { navigationListAdmin } from "../sidebar/constans/navigationList";
import ContentLogout from "./ContentLogout";
import Profile from "./Profile";

const LayoutAdmin = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen lg:min-w-[1355px] bg-[#FCFCFE] w-full">
      <div className="h-16 bg-white">
        <Box
          component="section"
          sx={{ p: 2, borderBottom: "1px solid #e1e1e1" }}
          className="w-full flex justify-between fixed bg-white z-[1000]"
        >
          <div
            className="cursor-pointer block md:hidden"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </div>
          <div className="p-0 flex items-center gap-4">
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="/images/android-chrome-512x512.png"
            />
            <Typography className="font-bold text-base">
              Sagu Admin Portal
            </Typography>
          </div>
          <Popover content={<ContentLogout />}>
            <div className="cursor-pointer">
              <Profile
                image={"https://mui.com/static/images/avatar/2.jpg"}
                name={"Santiago G"}
              />
            </div>
          </Popover>
        </Box>
      </div>
      <div className="min-h-screen m-0 p-0 flex bg-[#fcfcfe]">
        <Grid
          item
          className="w-1/3 min-w-[200px] max-w-[250px] hidden md:block"
        >
          <Sidebar navigationList={navigationListAdmin} />
        </Grid>

        <Drawer
          open={open}
          className="block md:hidden"
          onClose={toggleDrawer(false)}
        >
          <Sidebar navigationList={navigationListAdmin} />
        </Drawer>

        <div className=" w-full pr-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
