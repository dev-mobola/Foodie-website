import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import Logo from "../assets/FOODIE.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { 
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const navVariants = {
    hidden: {opacity: 0}, 
    display: {opacity: 1}
}
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>,
        },
        {
            text:"About",
            icon:<InfoIcon/>,
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>,
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>,
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>,
        },
    ]
    return (
    <motion.nav
        variants={ navVariants }
        initial={{opacity: 0}}
        animate={{opacity: 1, y: 20}}
        transition={{duration: 1.5, delay: 0.7}}
    >
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href="">
                <BsCart2 className="navbar-cart-icon" />
            </a>
            <motion.button 
                className="primary-button"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                Bookings Now
            </motion.button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">
            <Box 
            sx={{width:250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu (false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </motion.nav>
    );
};

export default Navbar; 