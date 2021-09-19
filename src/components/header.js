import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

import { Link } from "gatsby"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        "@media (max-width: 900px)": {
        padding: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
    nav_link: {
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',

    },
    nav_icon: {
        marginTop: '3px',
        marginBbottom: '3px',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
}));


export default function Header() {
    const classes = useStyles();

    //モバイルビュー使用可否を管理するステートを追加
    const [mobileView, setMobileView] = React.useState(false);

    // メニュー開閉ステートを設定
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    
    //Drawerの開閉
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen); // Drawerの開閉状態を反転
    };

    // 画面サイズが変更されたとき、ステートの更新
    React.useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    //デスクトップモード
    const displayDesktop = () => {
        return(
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>DEVELOPING BLOG</Link> 
                </Typography>
                <Link to="/about" className={classes.nav_link}>
                    <InfoIcon className={classes.nav_icon}/>
                    ABOUT
                </Link>
            </Toolbar>
        );
    };

    //モバイルモード
    const displayMobile = () => {
        return(
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                    
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}>DEVELOPING BLOG</Link> 
                </Typography>
                <Drawer 
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawer,
                    }}
                >
                    <List>
                        <ListItem>
                            <Link to="/" className={classes.nav_link}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.nav_icon} />
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/about" className={classes.nav_link}>
                                <ListItemIcon>
                                    <InfoIcon className={classes.nav_icon}/>
                                </ListItemIcon>
                                <ListItemText primary="About"/>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        );
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </div>
    );
}