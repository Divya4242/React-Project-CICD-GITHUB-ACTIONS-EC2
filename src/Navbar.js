import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';
import './appbar.css';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const drawerWidth = 240;


function Navbar(props) {
    const location = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    let navItems = ['Home', 'PageReplacement', 'SchedulingAlgorithms', 'MemoryPartition'];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
               The OS Project
            </Typography>
            <Divider />
            <List >
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton onClick={() => { navigate(`/${item}`) }} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: "#071e3d" }} >
                <Toolbar onClick={() => { handleDrawerToggle() }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => { navigate(`/`) }}
                        style={{ cursor: "pointer" }}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                        <Typography variant="h6" sx={{ ml: 1 }}>
                           The OS Project
                        </Typography>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, mr: 45 }}
                        onClick={() => { navigate(`/`) }}
                        style={{ cursor: "pointer" }}
                    >
                       The OS Project
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NavLink disableScrollLock={true} className='mynavitem' id={location.pathname === "/" ? "activenav" : ""} to='/'>Home</NavLink>&nbsp;&nbsp;&nbsp;
                        <NavLink disableScrollLock={true} className='mynavitem' id={location.pathname === "/page_replacement" ? "activenav" : ""} to="/page_replacement">Page Replacement</NavLink> &nbsp;&nbsp;&nbsp;
                        <NavLink disableScrollLock={true} className='mynavitem' id={location.pathname === "/scheduling_algorithms" ? "activenav" : ""} to="/scheduling_algorithms">Scheduling Algorithms</NavLink> &nbsp;&nbsp;&nbsp;
                        <NavLink disableScrollLock={true} className='mynavitem' id={location.pathname === "/memory_partition" ? "activenav" : ""} to="/memory_partition">Memory Partition</NavLink> &nbsp;&nbsp;&nbsp;
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default Navbar;