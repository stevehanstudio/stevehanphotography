// To do: page and label are the same.  Remove one.

import { AiFillHome } from "react-icons/ai"
import { MdContactMail } from "react-icons/md"
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
} from "react-icons/ri"

// Edited these 2 icons to better fit my design
import GrGallery from "../../static/GrGallery"
import FcAbout from "../../static/FcAbout"

export const navLinks = [
  {
    Icon: AiFillHome,
    page: "home",
    label: "home",
    url: "/",
  },
  {
    Icon: GrGallery,
    page: "portfolios",
    label: "portfolios",
    url: `/portfolios`,
  },
  {
    Icon: FcAbout,
    page: "about",
    label: "about",
    url: `/about`,
  },
  {
    Icon: MdContactMail,
    page: "contact",
    label: "contact",
    url: `/contact`,
  },
]

export const socialLinks = [
  {
    Icon: RiFacebookFill,
    iconColor: '#3b5998',
    label: "facebook",
    url: "https://www.facebook.com/Steve-Han-Photography-143240452512666",
  },
  {
    Icon: RiInstagramFill,
    iconColor: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
    label: "instagram",
    url: "https://www.instagram.com/stevehanphoto",
  },
  {
    Icon: RiPinterestFill,
    iconColor: '#c8232c',
    label: "pinterest",
    url: "https://www.pinterest.com/stevehanphoto",
  },
]
