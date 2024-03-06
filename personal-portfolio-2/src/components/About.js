import React from "react";
import { Container, Typography, Avatar, Box } from "@mui/material";

function About() {
	return (
		<Container
			maxWidth="false"
			sx={{
				marginTop: "10em",
				bgcolor: "#373331",
				padding: "2em",
				borderRadius: "40px",
			}}>
			<Box display="flex" justifyContent="center" alignItems="center">
				<Avatar
					alt="Owen Goh"
					src="/path/to/your/profile/picture.jpg"
					sx={{
						width: "50vw",
						height: "50vw",
						maxWidth: 100,
						maxHeight: 100,
						border: "2px solid #000",
					}}
				/>
				<Box ml={4}>
					<Typography
						variant="h2"
						component="h1"
						gutterBottom
						sx={{ fontWeight: "bold", color: "white" }}>
						About Me
					</Typography>
					<Typography
						variant="h5"
						component="h2"
						gutterBottom
						sx={{ fontWeight: "bold" }}>
						Hello! I'm Owen Goh, a software developer based in Singapore. I
						specialize in building exceptional, high-quality websites and
						applications.
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}

export default About;
