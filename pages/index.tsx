import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopProperties from "@/libs/components/homepage/TopProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
