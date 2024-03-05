import { Grid, Typography, Box, Avatar } from '@mui/material';

function Home() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="h4" gutterBottom>
              Hello, I'm Owen
            </Typography>
            <Typography variant="body1">
              I'm a software developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Avatar alt="John Doe" src="/profilepic.png" sx={{ width: 200, height: 200 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
