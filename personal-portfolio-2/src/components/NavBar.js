import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	useMediaQuery,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function NavBar() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	
	const handleDrawerToggle = () => {
		setDrawerOpen((drawerOpen) => !drawerOpen);
	};

	const menuItems = ["Home", "About", "Projects", "Contact"];

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: "#373331",
				borderRadius: "50px",
				maxWidth: "calc(100% - 20px)",
				margin: "10px",
			}}>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Owen Goh
				</Typography>
				{isMobile ? (
					<>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
						<Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
							<List sx={{ backgroundColor: "#373331", color: "white"}}>
								{menuItems.map((item, index) => (
									<ListItem key={index}>
										<ListItemText primary={item}/>
									</ListItem>
								))}
							</List>
						</Drawer>
					</>
				) : (
					<>
						{menuItems.map((item, index) => (
							<Button color="inherit" key={index}>
								{item}
							</Button>
						))}
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
