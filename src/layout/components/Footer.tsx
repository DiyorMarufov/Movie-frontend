import { memo } from "react";
import footerLogo from "../../shared/assets/footer/footer-logo.svg";
import playMarket from "../../shared/assets/footer/play-market.svg";
import apple from "../../shared/assets/footer/apple.svg";
import { Link } from "react-router-dom";
import {
  Clapperboard,
  Facebook,
  Globe,
  HelpCircle,
  Instagram,
  Menu,
  Phone,
  Play,
  Smile,
  Sparkle,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-[118px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-[30px] pt-[30px] pl-[25px] pb-[30px] bg-gray-100 rounded-[12px] max-lg:grid-cols-3 max-lg:gap-y-[50px] max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col gap-[48px]">
            <div>
              <img src={footerLogo} alt="" />
            </div>
            <div className="flex flex-col gap-2 pl-[10px]">
              <div className="flex items-center gap-2.5">
                <div>
                  <img src={playMarket} width={30} alt="" />
                </div>
                <div>
                  <p className="text-[13px] uppercase">Download from</p>
                  <p className="text-[18px]">Google Play</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div>
                  <img src={apple} width={30} alt="" />
                </div>
                <div>
                  <p className="text-[13px] uppercase">Get it on</p>
                  <p className="text-[18px]">App Store</p>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-[18px]">
            <div>
              <h1>About Us</h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Menu />
                  <span>Public Offer</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Sparkle />
                  <span>Advertising</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <HelpCircle />
                  <span>F.A.Q</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Phone />
                  <span>Contacts</span>
                </Link>
              </li>
            </div>
          </ul>

          <ul className="flex flex-col gap-[18px]">
            <div>
              <h1>Categories</h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Play />
                  <span>Movies</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Clapperboard />
                  <span>Theater</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Smile />
                  <span>Concerts</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Globe />
                  <span>Sports</span>
                </Link>
              </li>
            </div>
          </ul>

          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-[16px]">Contact Us</h1>
              <p className="text-[20px]">+998 (95) 897-33-38</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Social Media</h1>
              <div className="flex gap-5">
                <Instagram />
                <Facebook />
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
