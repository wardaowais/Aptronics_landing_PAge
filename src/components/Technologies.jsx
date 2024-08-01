import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaDatabase, FaJava, FaWordpress, FaDrupal, FaShopify, FaAngular, FaReact } from 'react-icons/fa';
import { DiMongodb, DiPostgresql, DiRedis, DiJoomla, DiHtml5 } from 'react-icons/di';
import { SiSqlite, SiFlutter, SiSwift, SiMariadb, SiMicrosoftsqlserver, SiAmazondynamodb } from 'react-icons/si';
import { RiSvelteFill } from "react-icons/ri";
import { IoLogoAndroid } from 'react-icons/io';

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
            {value === index && <Box sx={{ p: 3 }}><ul className="tech-icons">{children}</ul></Box>}
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
        <>
            <div className="main-container">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="FrontEnd" {...a11yProps(0)} />
                            <Tab label="Backend" {...a11yProps(1)} />
                            <Tab label="Mobile" {...a11yProps(2)} />
                            <Tab label="Data Base" {...a11yProps(3)} />
                            <Tab label="CMS" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <li><span className='icon'><FaReact /></span><span className='techname'> React </span></li>
                        <li><span className='icon'><RiSvelteFill /></span><span className='techname'> Svelte </span></li>
                        <li><span className='icon'><FaAngular /></span><span className='techname'> Angular </span></li>
                        <li><span className='icon'><DiHtml5 /></span><span className='techname'> HTML5 </span></li>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <li><span className='icon'><FaDatabase /></span><span className='techname'> Database </span></li>
                        <li><span className='icon'><DiMongodb /></span><span className='techname'> MongoDB </span></li>
                        <li><span className='icon'><DiPostgresql /></span><span className='techname'> PostgreSQL </span></li>
                        <li><span className='icon'><SiSqlite /></span><span className='techname'> SQLite </span></li>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <li><span className='icon'><SiFlutter /></span><span className='techname'> Flutter </span></li>
                        <li><span className='icon'><SiSwift /></span><span className='techname'> Swift </span></li>
                        <li><span className='icon'><FaJava /></span><span className='techname'> Java </span></li>
                        <li><span className='icon'><IoLogoAndroid /></span><span className='techname'> Android </span></li>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <li><span className='icon'><SiMariadb /></span><span className='techname'> MariaDB </span></li>
                        <li><span className='icon'><SiMicrosoftsqlserver /></span><span className='techname'> SQL Server </span></li>
                        <li><span className='icon'><DiRedis /></span><span className='techname'> Redis </span></li>
                        <li><span className='icon'><SiAmazondynamodb /></span><span className='techname'> DynamoDB </span></li>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        <li><span className='icon'><FaWordpress /></span><span className='techname'> WordPress </span></li>
                        <li><span className='icon'><FaDrupal /></span><span className='techname'> Drupal </span></li>
                        <li><span className='icon'><DiJoomla /></span><span className='techname'> Joomla </span></li>
                        <li><span className='icon'><FaShopify /></span><span className='techname'> Shopify </span></li>
                    </CustomTabPanel>
                </Box>
            </div>
        </>
    );
}
