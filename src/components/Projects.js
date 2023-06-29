import React from 'react'
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import './index.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Projects() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  return (
    <Box sx={{ width: '100%' }}>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sponsored Projects" value="1" />
            <Tab label="Fundraising" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <div className='container'>
            <Typography className='publicationName'>
                1. Office of Naval Research, Arlington,
VA, Jan 2018 - Dec 2021 <br></br> (P.I: Prof.
R. Edwin García, Prof. Haiyan Wang)

                </Typography>
                <br></br>
                <Typography className='publicationName'>
                2.  Applied Materials, Santa Clara, CA,
Jan 2017 - Dec 2017 (P.I: Prof. R.
Edwin García)


                </Typography>
                <br></br>
                <Typography className='publicationName'>
               3. QuantumScape, San Jose, CA, Jan 2015
- Dec 2016 (P.I: Prof. R. Edwin García)


                </Typography>
                <br></br>
                <Typography className='publicationName'>
               4. National Science Foundation, Aug 2014
- Dec 2015 (P.I: Prof. R. Edwin García)

                </Typography>
            </div>
    </TabPanel>
        <TabPanel value="2">
        <div className='container'>
            <Typography className='publicationName'>
                1.“Effect of alloy chemistry and temperature on phase stability of alloys for
USC application- A computational approach,” (Grant No. RYM-12-475-
RD-71), BHEL Corporate R & D, P.I: A. H. V. Pavan, <span style={{fontWeight:'600'}}>K. S. N. Vikrant</span>, K.
Singh, K. C. Harikumar (IIT Madras), Jul 2012 - Dec 2013.
(<span style={{fontWeight:'600'}}><span><CurrencyRupeeIcon/></span>9110000.00) or (<span><AttachMoneyIcon/></span>151833.00)</span>

                </Typography>
                <br></br>
                <Typography className='publicationName'>
                2.  “Creep fatigue life calculation procedure for powerplant components,” (Grant
No. BYM-12-030-RD-71), BHEL Corporate R & D, P.I: <span style={{fontWeight:'600'}}>K. S. N. Vikrant</span>, A.
H. V. Pavan, K. Singh, G. Jayaraman, Oct 2012 - Dec 2013.
(<span style={{fontWeight:'600'}}><span><CurrencyRupeeIcon/></span>2447000.00) or (<span><AttachMoneyIcon/></span>40783.00)</span>
                </Typography>
                <br></br>
                <Typography className='publicationName'>
               3. “Studies on corrosion and creep rupture behaviour of Super 304H steel
and its weld joints for advanced ultra super critical power plant boiler tube
applications”, (Grant No. BYM-12-474-RD-71), BHEL Corporate R & D, P.I:
<span style={{fontWeight:'600'}}>K. S. N. Vikrant</span>, A. H. V. Pavan, K. Singh, A. S. Khanna (IIT Bombay), Dec
2012 - Aug 2014. (<span style={{fontWeight:'600'}}><span><CurrencyRupeeIcon/></span>8330000.00) or (<span><AttachMoneyIcon/></span>138833.00)
</span>
                </Typography>
                <br></br>
                <Typography className='publicationName'>
               4. “Studies on dissimilar metal welds of IN 617 & Super 304 H for advanced
ultra super critical power plant applications”, (Grant No. BYM-11-366-
RD-71), BHEL Corporate R & D, P.I: A. H. V. Pavan, <span style={{fontWeight:'600'}}>K. S. N. Vikrant</span>, K.
Singh, A. S. Khanna (IIT Bombay), Jul 2011 - Aug 2014. (<span style={{fontWeight:'600'}}><span><CurrencyRupeeIcon/></span>8929000.00)
or (<span><AttachMoneyIcon/></span>148816.00) </span>

                </Typography>
            </div>
        </TabPanel>
      </TabContext>
  </Box>
  )
}

export default Projects