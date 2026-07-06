export const site = {
  name: "CEKAY Studio",
  shortName: "CEKAY",
  description:
    "Ad film production studio for brands that are ready to be remembered.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourstudio.com",
  location: "Chennai, India",
  accent: "#C9A84C",
  email: process.env.CONTACT_EMAIL || "hello@yourstudio.com",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/919999999999"
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/showreel", label: "Showreel" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;
