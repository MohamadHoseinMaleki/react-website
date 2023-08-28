import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegistrationForm from "./RegistrationForm";
import Search from "./Search";
import data from "./data";
import SelectDate from "./SelectDate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [searchQuery, setSearchQuery] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filtereditems = data.filter((data) =>
    data.userNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Registration Page" {...a11yProps(0)} />
          <Tab label="Free Test" {...a11yProps(1)} />
          <Tab label="Discount Page" {...a11yProps(2)} />
          <Tab label="Transaction" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <RegistrationForm data={filtereditems} itemsPerPage={6} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <RegistrationForm data={filtereditems} itemsPerPage={3} />   
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <RegistrationForm data={filtereditems} itemsPerPage={5} />  
     </TabPanel>
      <TabPanel value={value} index={3}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <RegistrationForm data={filtereditems} itemsPerPage={4} />  
      </TabPanel>
    </Box>
  );
}
