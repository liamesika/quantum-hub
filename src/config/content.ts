// ============================================================
// CONTENT CONFIGURATION — Single source of truth
// Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Quantum Hub",
  tagline: "Autonomous Mobility Event",
  url: "https://quantum-hub.com",
  lumaRsvp: "https://luma.com/nahsqvhw",
  linkedIn: "https://www.linkedin.com/company/quantum-hub/",
  whatsapp: "https://wa.me/972587878676",
};

export const heroContent = {
  title: "Autonomous Mobility Event",
  body: [
    `When it comes to autonomy, the world has moved past the "if" and straight into the "how." Today, AI-driven perception is navigating our world with precision—across our roads, our skies, and our factories.`,
    `As you navigate the Smart Mobility Summit 2026, we invite you to step away from the noise and join us for Autonomy in Motion: from AVs to humanoids, hosted by Quantum Hub together with Hyundai and in partnership with Maniv.`,
  ],
  date: "Tuesday, March 17, 9:00–12:30",
  venue: "Peres Center for Peace and Innovation in Tel Aviv",
  closingText:
    "Bringing together industry leaders, founders, and investors, we will explore the evolving landscape of autonomous mobility, AI, and dual-use technologies — from drones to autonomous vehicles to robotics operating in complex real-world environments.",
  ctaPrimary: { label: "RSVP on Luma", href: "https://luma.com/nahsqvhw" },
  ctaSecondary: { label: "Explore Experiences", href: "#experiences" },
};

export const aboutContent = {
  heading: "WHO ARE WE?",
  text: `Quantum-hub is an industry and tech platform that facilitates collaborations between industry leaders and startups. With our end-to-end value chain approach, we enable connections between these two worlds through the practical methodology of POCs testing. Our partners consist of five holding companies with 300+ subsidiaries worldwide, including Taavura-Livnat Group, VDL Group, Hyundai Motor Group, and Bazan Group.`,
};

export const experienceCards = [
  {
    title: "Conference Booth",
    subtitle: "Step into the mobility revolution at the Smart Mobility Summit 2026.",
    href: "/conference-boot",
    image: "/images/conference-booth.jpg",
  },
  {
    title: "Side Event",
    subtitle: "Autonomy in Motion — an exclusive morning of insights and connections.",
    href: "/side-event",
    image: "/images/side-event.jpg",
  },
  {
    title: "VIP Lounge",
    subtitle: "A curated space for high-level meetings and strategic conversations.",
    href: "/vip-lounge",
    image: "/images/vip-lounge.jpg",
  },
  {
    title: "Partners Private Dinners",
    subtitle: "Intimate gatherings connecting global partners with Israeli innovation.",
    href: "/partners-private-dinners",
    image: "/images/private-dinners.jpg",
  },
];

export const partnersLogos: { name: string; src: string; href?: string }[] = [
  // Add partner logos here as they become available
  // { name: "Partner Name", src: "/logos/partner.png", href: "https://..." },
];

export const sideEventContent = {
  title: "Autonomy in Motion: from AVs to humanoids",
  subtitle: "Hosted by Quantum Hub together with Hyundai and in partnership with Maniv",
  date: "Tuesday, March 17",
  time: "09:00–12:30",
  venue: "Peres Center for Peace and Innovation, Tel Aviv",
};

export const agendaMain = [
  { time: "09:00–09:45", title: "Breakfast, mingling & robotics exhibition" },
  { time: "09:45–09:55", title: "Host opening + video" },
  {
    time: "09:55–10:05",
    title: "Welcome remarks",
    speaker: "Shay Livnat",
    role: "Chairman at Taavura Group (MedOne, Tikshov, Quantum-Hub, UPS Israel)",
  },
  { time: "10:05–10:10", title: "Host Link" },
  {
    time: "10:10–10:40",
    title: "The Road to Scalable Autonomy",
    speaker: "Erez Dagan",
    role: "President, Wayve.ai",
  },
  { time: "10:40–10:45", title: "Host Link" },
  {
    time: "10:45–11:10",
    title: "Keynote",
    speaker: "Prof. Lior Wolf",
    role: "Mentee Robotics",
  },
  { time: "11:10–11:15", title: "Host Link" },
  {
    time: "11:15–11:35",
    title: "Strategic framing of Hyundai's leadership in autonomous mobility",
    speaker: "Keith Noh",
    role: "VP, Head of ZERO1NE group Future Strategy Div. of Hyundai Motor Group",
  },
  { time: "11:35–11:40", title: "Host Link" },
  {
    time: "11:40–12:20",
    title: "Silicon as the Autonomous Mobility Infrastructure — Panel",
    speaker: "Participants: Intel, Mellanox/NVIDIA, Israeli chip startups",
    role: "Moderated by Dr. Nir Karsikov (Spinedge)",
  },
  {
    time: "12:20–12:30",
    title: "Closing remark",
    speaker: "Liav Ben Rubi & Yariv Hammer",
    role: "CEO of Quantum Hub & Head of Hyundai CRADLE Tel Aviv",
  },
  { time: "12:30–13:00", title: "Light lunch" },
];

export const agendaAlternate = [
  {
    time: "12:10–12:40",
    title: 'Dual-Use panel — "What works, why it works, and who\'s winning"',
  },
  {
    time: "12:40–12:50",
    title: "Closing remark",
    speaker: "Liav Ben Rubi & Yariv Hammer",
  },
  { time: "12:50–13:20", title: "Light lunch" },
];

export const conferenceBootContent = {
  title: "INTERNATIONAL SMART MOBILITY SUMMIT 2026",
  body: `Step into the mobility Revolution with AI, sustainability and the changing economics of movement. From cutting-edge startups to industry giants, global investors to policymakers — this is where the smart mobility ecosystem comes together to connect, showcase new technologies, and drive revolutionary collaborations in the land of innovation.`,
};

export const vipLoungeContent = {
  title: "VIP Lounge",
  subtitle: "Quantum x Synopsys",
  time: "11:30 – 16:00",
  expectations: [
    "Exclusive networking with industry executives and investors",
    "Curated one-on-one meeting facilitation",
    "Premium refreshments and hospitality",
    "Live demos of cutting-edge autonomous technologies",
    "Dedicated concierge for partnership introductions",
  ],
};

export const privateDinnersContent = {
  title: "Partners Private Dinners",
  body: `Our global partners come to Israel to meet innovation and technology at its source. These intimate, invite-only dinners bring together senior executives from our partner holding companies with hand-selected Israeli startups and founders — creating a focused environment for meaningful conversations, strategic alignment, and the first steps toward transformative partnerships.`,
  cta: "Request an Invitation",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Conference Booth", href: "/conference-boot" },
  { label: "Side Event", href: "/side-event" },
  { label: "VIP Lounge", href: "/vip-lounge" },
  { label: "Partners Private Dinners", href: "/partners-private-dinners" },
];

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];

// Gallery images — replace with actual assets
export const boothGalleryImages: string[] = [
  // "/images/booth/1.jpg",
  // "/images/booth/2.jpg",
];

export const vipGalleryImages: string[] = [
  // "/images/vip/1.jpg",
];
