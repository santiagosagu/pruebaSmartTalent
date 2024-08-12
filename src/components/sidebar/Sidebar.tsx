/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Link } from "react-router-dom";
import { memo } from "react";

interface IChildrens {
  name: string;
  path: string;
  icon: any;
}

export interface INavigationList {
  name: string;
  path: string;
  icon: any;
  childrens: IChildrens[];
}
interface Iprops {
  navigationList: INavigationList[];
}

const Sidebar = memo(({ navigationList }: Iprops) => {
  return (
    <Box
      sx={{ width: 208, paddingBottom: 5 }}
      role="presentation"
      className=" md:fixed bg-[#FCFCFE] h-full z-[2000] mt-4 overflow-y-auto custom-scrollbar"
    >
      <List>
        {navigationList.map((item: INavigationList, index) => {
          if (item?.childrens.length > 0) {
            return (
              <div className="w-[200px] mb-1" key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="border-b"
                  >
                    {item.icon}
                    <Typography className="ml-7" ml={2}>
                      {item.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="border-t border-slate-400">
                    {item.childrens.map((children, index) => (
                      <Link to={children.path} key={index}>
                        <ListItem>
                          {children.icon}
                          <ListItemText
                            primary={children.name}
                            className="ml-4"
                          />
                        </ListItem>
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          } else {
            return (
              <Link to={item.path} key={index}>
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} className="capitalize" />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          }
        })}
      </List>
    </Box>
  );
});

export default Sidebar;
