import { Box, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Stack className={"footer-container"}>
      <Stack className={"main"}>
        <Stack className={"left"}>
          <Box component={"div"} className={"footer-box"}>
            <img src="/img/logo/logoWhite.svg" alt="" className={"logo"} />
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <span>total free customer car</span>
            <p>+82 10 29101911</p>
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <span>nee live</span>
            <p>+82 10 29101911</p>
            <span>Support?</span>
          </Box>
          <Box component={"div"} className={"footer-box"}>
            <span>follow us on social media</span>
            <div className={"media-box"}>
              <FacebookOutlinedIcon />
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </Box>
        </Stack>
        <Stack className={"right"}>
          <Box component={"div"} className={"top"}>
            <strong>keep yourself up to date</strong>
            <div>
              <input type="text" placeholder={"Your Email"} />
              <span>Subscribe</span>
            </div>
          </Box>
          <Box component={"div"} className={"bottom"}>
            <div>
              <strong>Popular Search</strong>
              <span>Property for Rent</span>
              <span>Property Low to hide</span>
            </div>
            <div>
              <strong>Quick Links</strong>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Our Service</span>
              <span>Contact Support</span>
              <span>FAQ</span>
            </div>
            <div>
              <strong>Discover</strong>
              <span>Seoul</span>
              <span>Gyeongide</span>
              <span>Busan</span>
              <span>Jejudo</span>
            </div>
          </Box>
        </Stack>
      </Stack>
      <Stack className={"second"}>
        <span>&copy Nestar -All rights reserved. Nestar 2024</span>
        <span>Privacy ' Terms ' Sitemap</span>
      </Stack>
    </Stack>
  );
};
export default Footer;
