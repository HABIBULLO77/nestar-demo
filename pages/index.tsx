import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack className="container">Popular Properties</Stack>
        <Box>Top Agents</Box>
        <Box>Popular Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
