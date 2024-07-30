import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SuccessCaseEditionMode from '../pages/successCaseEditionMode';
import ImprovementsEditionMode from '../pages/improvementsEditionMode';
import TechnologiesEditionMode from '../pages/technologiesEditionMode';
import ChallengesEditionMode from '../pages/challengesEditionMode';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#BFD52E', 
            },
            '& .MuiTab-root.Mui-selected': {
              color: '#99AA25', 
            },
            '& .MuiTab-root': {
              fontSize: '1rem', 
              textAlign: 'center',
              margin: '0 24px', 
              
            },
            

              
            }
            
          }>

          <Tab label="success Case" {...a11yProps(0)} />
          <Tab label="challenges" {...a11yProps(1)} />
          <Tab label="improvements" {...a11yProps(2)} />
          <Tab label="technologies" {...a11yProps(3)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SuccessCaseEditionMode/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ChallengesEditionMode/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ImprovementsEditionMode/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <TechnologiesEditionMode/>
      </CustomTabPanel>
    </Box>
  );
}

