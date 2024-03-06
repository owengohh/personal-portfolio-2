import React from "react";
import { Container, Typography, Button, Avatar } from "@mui/material";

function Home() {
	return (
		<Container maxWidth="md" sx={{ marginTop: "8em", textAlign: "center" }}>
			<Avatar
				alt="Owen Goh"
				src="/profilepic.png"
				sx={{ width: "50vw", height: "50vw", margin: "0 auto", marginBottom: "2em", maxHeight: 500, maxWidth: 500, border: "2px solid #000"}}
			/>
			<Typography
				variant="h2"
				component="h1"
				gutterBottom
				sx={{
					fontWeight: "bold",
				}}>
				Welcome to Owen Goh's Website
			</Typography>
			<Typography variant="h5" component="h2" gutterBottom>
				This is a place where I share my projects and experiences.
			</Typography>
			<Button variant="contained" color="primary" size="large">
				Learn More
			</Button>
		</Container>
	);
}

export default Home;
