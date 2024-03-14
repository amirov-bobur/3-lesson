import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
		<Box
			px={4}
			sx={{
				height: "10vh",
				borderBottom: "1px solid rgba(0,0,0,0.40)",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				backgroundColor: "#383838",
				color: "#fff",
			}}
		>
			<Stack direction={"row"} alignItems={"center"} gap='1rem'>
				<Link style={{ color: "white" }} to='/'>
					Bosh sahifa
				</Link>
				<Link style={{ color: "white" }} to='/about'>
					Biz haqimizda
				</Link>
				<Link style={{ color: "white" }} to='/contact'>
					Bog'lanish
				</Link>
			</Stack>
		</Box>
	);
}