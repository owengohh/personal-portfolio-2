import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ff4400",
		},
		secondary: {
			main: "#f5f5dc",
		},
		background: {
			default: "#E8E8E3",
		},
	},
});

function App() {
	return (
	<ThemeProvider theme={theme}>
		<NavBar></NavBar>
		<Home></Home>
	</ThemeProvider>
	);
}

export default App;
