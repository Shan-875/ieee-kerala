export const contact = {
  email: "sscs@ieeekerala.org",
  phone: "+91 484 123 4567",
  address: "IEEE Kerala Section House, Kochi, Kerala 682011, India",
  links: {
    ieee: "https://www.ieee.org/",
    sscs: "https://sscs.ieee.org/",
    kerala: "https://ieeekerala.org/",
    join: "https://www.ieee.org/membership/join/",
    sscsMembership: "https://sscs.ieee.org/membership",
    isscc: "https://isscc.org/",
    cicc: "https://ieeexplore.ieee.org/xpl/conhome.jsp?punumber=1000195",
    esscirc: "https://www.esscirc.org/",
    symposiaVLSI: "https://www.vlsisymposia.org/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    manipalTravelGrant:
      "https://sscs.ieee.org/students-and-young-professionals/travel-grants",
    sscsScholarships:
      "https://sscs.ieee.org/students-and-young-professionals/awards-and-grants",
    preuniversity:
      "https://sscs.ieee.org/education/pre-university-and-university-outreach",
  },
};

export const heroSlides = [
  {
    title: "IEEE SSCS",
    highlight: "Kerala Chapter",
    intro:
      "Pioneering semiconductor innovation across Kerala — empowering the next generation of chip designers, researchers, and industry leaders with world-class education, global networking, and hands-on VLSI excellence.",
  },
  {
    title: "IEEE SSCS",
    highlight: "Kerala Chapter",
    intro:
      "From RTL-to-GDS workshops to ISSCC paper clinics — we bridge the gap between academic excellence and India's fast-growing semiconductor mission, building talent that competes on the global stage.",
  },
  {
    title: "IEEE SSCS",
    highlight: "Kerala Chapter",
    intro:
      "Join a vibrant community of 500+ members across 7+ Student Branches. Access JSSC, Distinguished Lecturers, travel grants, and industry connections that launch semiconductor careers.",
  },
];

export const announcements = [
  "SSCS Kerala wins Best Small Chapter Award — IEEE India Council 2025",
  "FPGA Design Workshop registrations open across all Student Branches in Kerala",
  "Call for Nominations: SSCS Distinguished Lecturer visits 2025-26 now open",
  "IEEE SSCS Predoctoral Achievement Award — final call, applications closing soon",
  "JSSC Special Issue on Edge-AI Accelerators — paper submissions invited",
  "India Semiconductor Mission (ISM) partnered skilling program — registrations live",
  "Women in Circuits (WiC) national hackathon — prize pool announced",
];

export const benefits = [
  {
    label: "Journal of Solid-State Circuits",
    href: "https://sscs.ieee.org/publications/ieee-journal-of-solid-state-circuits-jssc",
  },
  {
    label: "Solid-State Circuits Magazine",
    href: "https://sscs.ieee.org/publications/ieee-solid-state-circuits-magazine",
  },
  {
    label: "International Conferences",
    href: "https://sscs.ieee.org/conferences.html",
  },
  {
    label: "Webinars on Cutting Edge Topics",
    href: "https://sscs.ieee.org/education/upcoming-webinars",
  },
  {
    label: "Online Tutorials",
    href: "https://sscs.ieee.org/education/tutorials-at-conferences",
  },
  {
    label: "Local Networking at 100+ Chapters Worldwide",
    href: "https://sscs.ieee.org/chapters",
  },
];

export const about = {
  vision:
    "The IEEE Solid-State Circuits Society's vision is to foster innovation and excellence in solid-state circuits for the benefit of humanity.",
  mission:
    "To serve our members through education, communication, recognition, leadership opportunities, and networking.",
  tagline: "Advancing semiconductor and integrated-circuit innovation across Kerala.",
  whoWeAre:
    "Formed under the IEEE Kerala Section, the Solid-State Circuits Society (SSCS) Kerala Chapter is the nodal body for students, faculty, and industry professionals working on semiconductors, integrated circuits (IC), VLSI design, FPGA/ASIC flows, and related embedded systems across the state. We run lectures, flagship workshops, student branch chapters, and outreach programs that connect academia with India's fast-growing semiconductor mission.",
  societyFacts: [
    {
      label: "Founded",
      value: "1966",
      detail: "Professional Group on Solid-State Circuits became SSCS in 1997",
    },
    {
      label: "10,000+",
      value: "Members",
      detail: "Industry R&D, faculty, and students in 100+ countries",
    },
    {
      label: "#1 cited",
      value: "JSSC",
      detail: "Highest impact-factor journal in solid-state circuits",
    },
    {
      label: "Home of ISSCC",
      value: "Flagship",
      detail: "The International Solid-State Circuits Conference, 'Chip Olympics'",
    },
  ],
  pillars: [
    {
      title: "Education & Outreach",
      body: "Guest lectures, webinar series, hands-on VLSI / FPGA / ASIC workshops in colleges across Kerala.",
      icon: "GraduationCap",
    },
    {
      title: "Industry Connect",
      body: "Seminars and tours with semiconductor majors, India Semiconductor Mission partners and EDA vendors.",
      icon: "Factory",
    },
    {
      title: "Research & Publications",
      body: "Paper clinics, best-paper awards, JSSC reading circles and review mentoring for students.",
      icon: "PenTool",
    },
    {
      title: "Leadership & Volunteering",
      body: "Student Branch Chapters, Execom opportunities and IEEE leadership pipeline.",
      icon: "Users",
    },
    {
      title: "Women in Circuits (WiC)",
      body: "Dedicated programs to increase the share of women engineers in IC design.",
      icon: "HeartHandshake",
    },
    {
      title: "Membership Value",
      body: "Distinguished Lecturers, travel grants, society awards and global chapter networking.",
      icon: "Gem",
    },
  ],
};

export const stats = [
  { value: "10+", label: "Active SB Chapters", icon: "Building2" },
  { value: "750+", label: "Student & Prof. Members", icon: "Users" },
  { value: "120+", label: "Events & Workshops Conducted", icon: "Calendar" },
  { value: "8+", label: "Years of Impact in Kerala", icon: "Award" },
  { value: "15+", label: "Industry Partners", icon: "Factory" },
  { value: "50K+", label: "Total Outreach Reach", icon: "Globe" },
];

export interface MembershipBenefit {
  title: string;
  description: string;
  icon: string;
}

export const membershipBenefits: MembershipBenefit[] = [
  {
    icon: "BookOpen",
    title: "Top-Tier Publications",
    description:
      "Access the JSSC — the most-cited journal in solid-state circuits — and the award-winning Solid-State Circuits Magazine.",
  },
  {
    icon: "GraduationCap",
    title: "World-Class Education",
    description:
      "Live and on-demand webinars, tutorials at flagship conferences, and Distinguished Lecturer programs.",
  },
  {
    icon: "Users",
    title: "Global Network",
    description:
      "Connect with 10,000+ professionals across 100+ chapters, industry leaders, and academic pioneers.",
  },
  {
    icon: "Lightbulb",
    title: "Technical Standards & Roadmaps",
    description:
      "Influence the direction of IC design through participation in standards committees and industry roadmaps.",
  },
  {
    icon: "Award",
    title: "Awards & Recognition",
    description:
      "Nominate peers, compete for best-paper prizes, and earn SSCS travel grants for top conferences.",
  },
  {
    icon: "Briefcase",
    title: "Career Advancement",
    description:
      "Exclusive career portal, industry job board, and leadership opportunities within the Chapter.",
  },
];

export interface Event {
  id: string;
  date: string;
  venue?: string;
  title: string;
  summary?: string;
  speakers: string[];
  category: "Workshop" | "Webinar" | "Guest Lecture" | "Conference" | "Hands-on";
  featured?: boolean;
  attendance?: string;
  mode?: "Online" | "Hybrid" | "In-Person";
  href?: string;
}

export const events: Event[] = [
  {
    id: "1",
    date: "24–25 Feb",
    venue: "Saintgits College of Engineering, Pathanamthitta",
    title: "Familiarization of ASIC and FPGA Design",
    summary:
      "Two-day hands-on flagship workshop covering RTL-to-GDS flow with open-source EDA tools and Intel FPGA boards.",
    speakers: [
      "Dr.Sreekala K S",
      "Er. Ajith Ravindran",
      "Er. Abraham K Thomas",
      "Er. Anish M George",
    ],
    category: "Workshop",
    featured: true,
    attendance: "120+ attendees",
    mode: "Hybrid",
  },
  {
    id: "2",
    date: "5 Nov",
    venue: "Virtual · Zoom",
    title: "Spintronics Memory Fabrication and Roadmap",
    summary:
      "Deep-dive lecture on emerging non-volatile memory technologies (STT-MRAM, SOT-MRAM) with industry roadmaps.",
    speakers: ["Dr.K.R. Ganesh"],
    category: "Guest Lecture",
    attendance: "180+ attendees",
    mode: "Online",
  },
  {
    id: "3",
    date: "5 Oct",
    venue: "Virtual · IEEE Collabratec",
    title: "Career In Semiconductor Industry",
    summary:
      "Panel on VLSI profiles — verification, analog design, CAD, product engineering, and how students can upskill.",
    speakers: ["Rony Alex Thomas"],
    category: "Webinar",
    attendance: "300+ attendees",
    mode: "Online",
  },
  {
    id: "4",
    date: "25 Sep",
    venue: "Virtual · YouTube Live",
    title: "Power Semiconductor Industry: Innovations & Significance in India",
    summary:
      "Talks on SiC / GaN power devices, EV traction inverters and India's power-semiconductor mission.",
    speakers: ["Dr. Akshay K"],
    category: "Webinar",
    attendance: "220+ attendees",
    mode: "Online",
  },
  {
    id: "5",
    date: "23 Aug",
    venue: "Amaljyothi College of Engineering",
    title: "VEGA Processors and Ecosystem",
    summary:
      "Session on indigenous RISC-V microprocessors, Shakti / VEGA SoCs and India's semiconductor ecosystem.",
    speakers: ["Mr. Libin T T", "Mr. Sreenath", "Mr. Premjith A V"],
    category: "Guest Lecture",
    attendance: "90+ attendees",
    mode: "In-Person",
  },
  {
    id: "6",
    date: "16 Aug",
    venue: "Virtual",
    title: "Higher Education after B.Tech",
    summary:
      "Guided session on M.Tech, MS and PhD pathways in semiconductor and VLSI schools in India and abroad.",
    speakers: ["Prof. Rajasree S", "Dr Shajimon K John", "Dr Muhammed Shanir P P"],
    category: "Webinar",
    attendance: "260+ attendees",
    mode: "Online",
  },
  {
    id: "7",
    date: "28 Jul",
    venue: "LBS Institute of Technology for Women",
    title: "Low Power Smart Electronics for IoT and Aerospace Applications",
    summary:
      "Design of low-power radios, MCU-class SoCs, and radiation-hardened electronics for small-sat missions.",
    speakers: ["Dr. Sreelal S"],
    category: "Guest Lecture",
    attendance: "110+ attendees",
    mode: "In-Person",
  },
  {
    id: "8",
    date: "Jul 2022",
    venue: "Trivandrum",
    title: "Higher Education after B.Tech",
    summary:
      "Career counseling track at the annual IEEE Kerala Student and Young Professionals Congress.",
    speakers: [],
    category: "Conference",
    attendance: "500+ delegates",
    mode: "Hybrid",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  email?: string;
  bio?: string;
}

export const studentExecom2025: TeamMember[] = [
  { name: "Aditya R", role: "Student Representative", bio: "B.Tech ECE · Overall student chapter lead." },
  { name: "Teena Alex", role: "Student Representative - Kochi Hub", bio: "Kochi region SB coordination." },
  { name: "Hridya V Nitoor", role: "Student Representative - Malabar Hub", bio: "Malabar region SB coordination." },
  { name: "Theertha Prasad", role: "Student Representative - Travancore Hub", bio: "Travancore region SB coordination." },
  { name: "Rebecca Mary Varughese", role: "Women in Circuits Lead", bio: "WiC workshops and outreach champion." },
  { name: "Alan Antony", role: "Membership Development Coordinator", bio: "Member onboarding + chapter growth." },
  { name: "Rohan Fleeny", role: "Membership Development Team" },
  { name: "Nadia Sharafudheen", role: "Membership Development Team" },
  { name: "Deva Prakash", role: "Project Coordinator", bio: "Hackathons and community projects." },
  { name: "Daniel V Mathew", role: "Project Team" },
  { name: "Amutha Lakshmi B", role: "ECC & Documentation Lead", bio: "Newsletters, event records and comms." },
  { name: "Niranjana M V", role: "ECC & Documentation Team" },
  { name: "Hima H", role: "ECC & Documentation Team" },
  { name: "Theertha H", role: "Publicity Coordinator", bio: "Social media & chapter visibility." },
  { name: "Bhadra J R", role: "Event Manager", bio: "End-to-end event operations." },
  { name: "Archana T", role: "Event Management Team" },
  { name: "Yash Sanjay Kurup", role: "Technical Coordinator", bio: "Hands-on workshops & labs." },
  { name: "Merlin Mariyam Reney", role: "Technical Coordination Team" },
  { name: "Arsha A Babu", role: "Content Lead", bio: "Website, magazine & outreach copy." },
  { name: "Helen Madhu Kuriakose", role: "Content Team" },
  { name: "Aadithya A H", role: "Design Lead", bio: "Brand, posters and creative direction." },
  { name: "Lekshmi S Aji", role: "Design Team" },
  { name: "Azil Ahamed Moopan", role: "Video Editor", bio: "Event reels & short-form content." },
  { name: "Mohammed Roshan", role: "Webmaster", bio: "Website engineering & hosting." },
  { name: "Kevin Mathew", role: "Web Team" },
];

export const professionalExecom2025: TeamMember[] = [
  {
    name: "Prof. Muhammed Kasim S",
    role: "Founder Chair",
    bio: "Founding chair and professor, guiding chapter strategy since inception.",
  },
  {
    name: "Dr. Ayoob Khan T E",
    role: "Chair",
    bio: "Current chair, overall responsibility for chapter operations and society reporting.",
  },
  {
    name: "Mr. Agi Joseph George",
    role: "Vice Chair",
    bio: "Vice chair and industry liaison, coordinating with semiconductor companies.",
  },
  {
    name: "Dr. Shajimon K John",
    role: "Secretary",
    bio: "Secretary, event calendar and chapter meetings minute-keeping.",
  },
  { name: "Mr. Girish M", role: "Jt. Secretary", bio: "Joint secretary supporting chapter administration." },
  {
    name: "Mr. Jithin K",
    role: "Treasurer",
    bio: "Treasurer and finance lead for all chapter budgets.",
  },
  {
    name: "Mr. Ajith Ravindran",
    role: "Education Activities Chair",
    bio: "Leads workshops, student courses, and industry-ready training programs.",
  },
  {
    name: "Mr. B. Bhuvan",
    role: "Industry Engagement Committee Chair",
    bio: "Leads corporate partnerships, industry talks and internships.",
  },
  {
    name: "Mr. Kadar A A",
    role: "Research & Publication Chair",
    bio: "Leads paper-clinic, JSSC reading circles and research mentoring.",
  },
];

export const sbChapters = [
  { name: "Saintgits College of Engineering", region: "Kochi Hub", established: "2022" },
  { name: "Chegannur College of Engineering", region: "Travancore Hub", established: "2023" },
  { name: "College of Engineering, Karunagapally", region: "Kochi Hub", established: "2022" },
  { name: "Amaljyothi College of Engineering", region: "Kochi Hub", established: "2021" },
  { name: "LBS Institute of Technology for Women", region: "Trivandrum", established: "2023" },
  { name: "College of Engineering, Kalloopara", region: "Travancore Hub", established: "2024" },
  { name: "VISAT", region: "Malabar Hub", established: "2024" },
];

export const galleryImages = [
  {
    id: "1",
    alt: "IEEE SSCS Kerala Chapter Conference – Auditorium gathering",
    prompt:
      "professional semiconductor conference auditorium audience engineers researchers podium presentation blue ieee style lighting wide angle shot photorealistic",
    size: "landscape_16_9",
  },
  {
    id: "2",
    alt: "FPGA & ASIC Hands-on Workshop – Lab session",
    prompt:
      "electronics engineering laboratory students working on fpga development boards oscilloscopes circuit boards hands-on workshop photorealistic",
    size: "portrait_4_3",
  },
  {
    id: "3",
    alt: "Technical Talk Series – Guest lecture",
    prompt:
      "university lecture hall professor giving technical talk audience of students whiteboard projector slides blue accents photorealistic candid",
    size: "square",
  },
  {
    id: "4",
    alt: "Student Branch Inauguration Ceremony",
    prompt:
      "college inauguration ceremony dignitaries on stage lighting lamp ieee banner group photo professional event photography",
    size: "portrait_16_9",
  },
  {
    id: "5",
    alt: "Semiconductor Chip & Wafer – Technology Showcase",
    prompt:
      "macro close up of silicon wafer with microchips processor integrated circuits blue lighting lab environment reflective photorealistic",
    size: "square_hd",
  },
  {
    id: "6",
    alt: "Team Meetup – IEEE SSCS Volunteers",
    prompt:
      "diverse group of young indian engineering students volunteers standing together happy smiling outside modern campus building wearing smart casuals team photo",
    size: "landscape_4_3",
  },
  {
    id: "7",
    alt: "Chip-on-board lab – soldering & validation",
    prompt:
      "close up electronics lab pcb rework station microscope soldering stations bga chips tech lab with blue accent lighting photorealistic",
    size: "landscape_4_3",
  },
  {
    id: "8",
    alt: "Women in Circuits technical workshop",
    prompt:
      "women engineers coding workshop classroom modern engineering institute students at laptops mentor helping gender diversity in tech photorealistic",
    size: "portrait_4_3",
  },
];

export interface Conference {
  title: string;
  code: string;
  location: string;
  when: string;
  description: string;
  href: string;
  accent: string;
}

export const flagshipConferences: Conference[] = [
  {
    title: "ISSCC",
    code: "International Solid-State Circuits Conference",
    location: "San Francisco, USA",
    when: "Annual · Feb",
    description:
      "The 'Olympics of Chips' — premier forum for advances in solid-state circuits and systems-on-chip, including the legendary evening sessions.",
    href: "https://isscc.org/",
    accent: "from-rose-500 via-fuchsia-500 to-indigo-500",
  },
  {
    title: "CICC",
    code: "Custom Integrated Circuits Conference",
    location: "United States",
    when: "Annual · Apr",
    description:
      "Practice-oriented circuits conference covering analog, mixed-signal, RF, digital, mm-wave and power management ICs.",
    href: "https://ieeexplore.ieee.org/xpl/conhome.jsp?punumber=1000195",
    accent: "from-cyan-500 via-sky-500 to-blue-600",
  },
  {
    title: "ESSCIRC",
    code: "European Solid-State Circuits Conference",
    location: "Europe",
    when: "Annual · Sep",
    description:
      "Europe's flagship SSCS conference, linked with ESSDERC on device research and European semiconductor ecosystems.",
    href: "https://www.esscirc.org/",
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    title: "Symposia on VLSI",
    code: "Symposia on VLSI Technology & Circuits",
    location: "Japan / Hawaii",
    when: "Annual · Jun",
    description:
      "Joint Symposia bridging process technology and circuit design with deep-dive short courses.",
    href: "https://www.vlsisymposia.org/",
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
  },
];

export interface Lecturer {
  name: string;
  title: string;
  organization: string;
  topic: string;
  quote: string;
  avatarTint: string;
}

export const distinguishedLecturers: Lecturer[] = [
  {
    name: "Dr. K. R. Ganesh",
    title: "SSCS Distinguished Lecturer",
    organization: "Semi-Conductor Laboratory · Dept. of Space, Govt. of India",
    topic: "Emerging Memory Technologies & Spintronics",
    quote:
      "SSCS Kerala Lectures are a model for how chapters should bridge university curricula with real-world semiconductor manufacturing.",
    avatarTint: "from-blue-500 to-indigo-600",
  },
  {
    name: "Dr. Sreelal S",
    title: "Associate Professor",
    organization: "Indian Institute of Space Science and Technology (IIST)",
    topic: "Aerospace & Radiation-Hardened VLSI",
    quote:
      "A rare chapter that consistently delivers talks with real product context — not just textbook design.",
    avatarTint: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Er. Ajith Ravindran",
    title: "Industry Fellow",
    organization: "Analog / Mixed-Signal IC Industry",
    topic: "Practical Analog IC Design & Tapeouts",
    quote:
      "The hands-on workshops by Kerala SSCS give students their first real shot at RTL-to-GDS — something most campuses never see.",
    avatarTint: "from-amber-500 to-orange-600",
  },
  {
    name: "Dr. Ayoob Khan T E",
    title: "Chapter Chair",
    organization: "IEEE SSCS Kerala Chapter",
    topic: "Semiconductor Ecosystem for India",
    quote:
      "Our job is to make sure every ECE student in Kerala knows what a chip-design career looks like — long before they graduate.",
    avatarTint: "from-emerald-500 to-teal-600",
  },
];

export interface ResearchHighlight {
  tag: "Journal" | "Conference" | "Featured";
  title: string;
  authors: string;
  summary: string;
  href: string;
}

export const researchHighlights: ResearchHighlight[] = [
  {
    tag: "Journal",
    title:
      "A 12b 2.4GS/s Time-Interleaved SAR ADC with Hybrid Foreground–Background Calibration in 16nm FinFET",
    authors: "Member-led JSSC paper-clinic reading circle · Kerala SSCS",
    summary:
      "The chapter runs a monthly JSSC reading circle where students and young faculty walk through recent landmark papers — analog, data converters, SerDes, PLLs and digital assists.",
    href: "https://sscs.ieee.org/publications/ieee-journal-of-solid-state-circuits-jssc",
  },
  {
    tag: "Conference",
    title: "ISSCC Paper Clinic: 2025 Digest Walkthrough",
    authors: "Led by Kerala SSCS Execom (R&D Subcommittee)",
    summary:
      "A multi-part online series walking the 2025 ISSCC Digest across AI accelerators, 3D-IC, chiplets, and power electronics.",
    href: "https://isscc.org/",
  },
  {
    tag: "Featured",
    title: "India Semiconductor Mission (ISM) Outreach Series",
    authors: "Industry Engagement Committee · SSCS Kerala",
    summary:
      "A curated series on DFI, semiconductor fabs, ATMPs, EDA incentives, and how students can tap into ISM-funded skilling programs.",
    href: "https://www.ieee.org/",
  },
  {
    tag: "Journal",
    title: "Solid-State Circuits Magazine — Feature Club",
    authors: "SSCS Kerala · Content + Research teams",
    summary:
      "Deep-dive sessions on IEEE SSCS Magazine features: everything from quantum computing cryo-CMOS to automotive chips.",
    href: "https://sscs.ieee.org/publications/ieee-solid-state-circuits-magazine",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarTint: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The SSCS FPGA workshop at my college was the first time I saw Verilog synthesize and run on real hardware. I joined SSCS the same day and have since interned at a semiconductor startup.",
    author: "Athira V",
    role: "Undergraduate · ECE, 2025",
    avatarTint: "from-cyan-500 to-blue-600",
  },
  {
    quote:
      "As a Women in Circuits lead, I got to chair all-women panels, design hands-on lab days, and bring female engineers from Tier-1 semiconductor companies to campuses that rarely get that exposure.",
    author: "Rebecca Mary Varghese",
    role: "WiC Lead · SSCS Kerala Student Execom",
    avatarTint: "from-pink-500 to-rose-600",
  },
  {
    quote:
      "The Chapter's JSSC reading club is the single most useful research habit I picked up in my M.Tech. I learned to read landmark circuits papers systematically — not just to pass exams.",
    author: "Kiran P.",
    role: "M.Tech VLSI · Research Assistant",
    avatarTint: "from-violet-500 to-indigo-600",
  },
  {
    quote:
      "SSCS Kerala helped my SB launch from scratch — we got budget templates, publicity decks and direct connects to industry speakers for our annual tech symposium.",
    author: "Steffy Tom",
    role: "SB Chair · Amaljyothi College of Engineering",
    avatarTint: "from-amber-500 to-orange-600",
  },
  {
    quote:
      "From Distinguished Lecturer visits to ISSCC travel grants, SSCS membership genuinely pays for itself. My first conference attendance was funded entirely by SSCS grants.",
    author: "Roshan A.",
    role: "PhD Scholar · IC Design",
    avatarTint: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "The industry talks gave me a clear picture of 'what EDA engineers actually do'. I landed a VLSI verification role because of the connections I made at a Kerala SSCS mixer.",
    author: "Sharon K. Sam",
    role: "Verification Engineer · Bengaluru",
    avatarTint: "from-sky-500 to-blue-600",
  },
];

export interface Opportunity {
  title: string;
  blurb: string;
  cta: string;
  href: string;
  icon: string;
  tint: string;
}

export const studentOpportunities: Opportunity[] = [
  {
    title: "SSCS Travel Grants",
    blurb:
      "Student travel grants to ISSCC, CICC, ESSCIRC and regionally approved conferences — apply before the chapter deadline.",
    cta: "Check eligibility",
    href: "https://sscs.ieee.org/students-and-young-professionals/travel-grants",
    icon: "PlaneTakeoff",
    tint: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "Predoctoral Achievement Award",
    blurb:
      "Prestigious SSCS award for exceptional doctoral-level students in solid-state circuits.",
    cta: "Nominate / Apply",
    href: "https://sscs.ieee.org/students-and-young-professionals/awards-and-grants",
    icon: "Trophy",
    tint: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Student Branch Chapters (SBC)",
    blurb:
      "Start an SSCS SBC at your engineering college — get seed funding, speaker connects and chapter admin kits.",
    cta: "Start an SBC",
    href: "https://sscs.ieee.org/chapters/start-a-chapter",
    icon: "Building2",
    tint: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Pre-University & Outreach Kits",
    blurb:
      "SSCS resources and activity kits to bring semiconductors to high-school and first-year ECE classrooms.",
    cta: "Request kit",
    href: "https://sscs.ieee.org/education/pre-university-and-university-outreach",
    icon: "GraduationCap",
    tint: "from-emerald-500/20 to-teal-500/20",
  },
];

export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: "What is IEEE SSCS and what does the Kerala Chapter do?",
    a:
      "IEEE SSCS is the world's leading professional society for integrated circuits and semiconductors. The Kerala Chapter runs workshops, lectures, student branches, Women in Circuits programs, and industry connect events — all free or heavily subsidized for SSCS members.",
  },
  {
    q: "Who can become a member of SSCS Kerala Chapter?",
    a:
      "Any IEEE member can add the SSCS Society membership to their existing profile. Students, faculty, and working professionals in Kerala automatically become part of the Kerala Chapter's regional community upon joining IEEE + SSCS.",
  },
  {
    q: "How do I start / renew my SSCS membership?",
    a:
      "Use the 'Join IEEE SSCS' button on this site, or go to sscs.ieee.org/membership. Undergraduate students typically qualify for the highly discounted student-membership tier.",
  },
  {
    q: "My college does not have an SSCS Student Branch Chapter. Can we start one?",
    a:
      "Yes. Email sscs@ieeekerala.org with your SB counsellor's name and 10+ interested SSCS student members. The chapter will provide the complete SBC chartering kit, budget templates and kick-start sessions.",
  },
  {
    q: "Does the Chapter support research or paper publications?",
    a:
      "Yes. Our Research & Publication subcommittee runs JSSC reading circles, paper-clinic reviews for students, and information on SSCS best-paper awards, travel grants and pre-doctoral scholarships.",
  },
  {
    q: "Are there industry internships or placement support?",
    a:
      "The Industry Engagement Committee curates company talks, joint hackathons and internship postings exclusively to SSCS members. Follow our social channels and the Members-Only newsletter.",
  },
];

export interface Sponsor {
  tier: "Premier" | "Industry Partner" | "Academic Partner" | "Media Partner";
  name: string;
  tagline: string;
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    tier: "Premier",
    name: "IEEE Kerala Section",
    tagline: "Host section for SSCS Kerala Chapter",
    website: "https://ieeekerala.org/",
  },
  {
    tier: "Industry Partner",
    name: "India Semiconductor Mission (ISM)",
    tagline: "Semi-conductor policy & skilling outreach partner",
    website: "https://www.ieee.org/",
  },
  {
    tier: "Industry Partner",
    name: "Kerala Start-Up Mission (KSUM)",
    tagline: "Hardware & deep-tech startup partner",
    website: "https://www.ieee.org/",
  },
  {
    tier: "Academic Partner",
    name: "APJ Abdul Kalam Technological University",
    tagline: "Affiliate syllabus and outreach partner",
    website: "https://www.ieee.org/",
  },
  {
    tier: "Academic Partner",
    name: "IIT Palakkad · IISER TVM",
    tagline: "Research & distinguished lectures co-hosts",
    website: "https://www.ieee.org/",
  },
  {
    tier: "Media Partner",
    name: "IEEE Solid-State Circuits Magazine",
    tagline: "Official SSCS publication partner",
    website: "https://sscs.ieee.org/publications/ieee-solid-state-circuits-magazine",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Conferences", href: "#conferences" },
  { label: "Research", href: "#research" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Student Execom", href: "#student-execom" },
  { label: "Professional Execom", href: "#professional-execom" },
  { label: "SB Chapters", href: "#sb-chapters" },
  { label: "Contact", href: "#contact" },
];

export interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
  tint: string;
}

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Best Small Chapter Award",
    description:
      "Honored with the 'Best Small Chapter Award' by IEEE India Council for outstanding chapter activities, membership growth, and community impact.",
    icon: "Trophy",
    tint: "from-amber-400/20 to-orange-500/20",
  },
  {
    year: "2024",
    title: "120+ Events Milestone",
    description:
      "Successfully organized over 120 technical events including flagship workshops, Distinguished Lectures, and industry panels across Kerala.",
    icon: "Calendar",
    tint: "from-blue-400/20 to-cyan-500/20",
  },
  {
    year: "2023",
    title: "10 Active SB Chapters",
    description:
      "Expanded Student Branch Chapter network to 10+ engineering colleges, establishing SSCS presence across all three regions of Kerala.",
    icon: "Building2",
    tint: "from-emerald-400/20 to-teal-500/20",
  },
  {
    year: "2022",
    title: "Women in Circuits Launch",
    description:
      "Launched the dedicated Women in Circuits (WiC) initiative with all-women hackathons, mentorship programs, and industry spotlight sessions.",
    icon: "HeartHandshake",
    tint: "from-rose-400/20 to-pink-500/20",
  },
];

export interface Milestone {
  year: string;
  title: string;
  detail: string;
}

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "Chapter Inception",
    detail:
      "IEEE SSCS Kerala Chapter officially chartered under IEEE Kerala Section with founding members from academia and industry.",
  },
  {
    year: "2019",
    title: "First Flagship Workshop",
    detail:
      "Conducted the first ASIC/FPGA design workshop with 100+ participants, setting the foundation for hands-on technical programs.",
  },
  {
    year: "2020",
    title: "Digital Transition",
    detail:
      "Successfully pivoted to virtual events during the pandemic, reaching 5000+ attendees across India through webinars and online workshops.",
  },
  {
    year: "2021",
    title: "SB Chapter Expansion",
    detail:
      "Launched 5 new Student Branch Chapters at leading engineering colleges, establishing a three-hub model (Kochi, Malabar, Travancore).",
  },
  {
    year: "2022",
    title: "Industry Partnerships",
    detail:
      "Formalized partnerships with semiconductor majors, EDA vendors, and India Semiconductor Mission affiliates for skilling programs.",
  },
  {
    year: "2023",
    title: "Research Clinic Launch",
    detail:
      "Initiated JSSC Reading Circles and ISSCC Paper Clinics, mentoring 50+ research scholars on high-impact circuit design publications.",
  },
  {
    year: "2024",
    title: "750+ Members Strong",
    detail:
      "Crossed 750 active members milestone with balanced representation from students, faculty, and industry professionals across Kerala.",
  },
  {
    year: "2025",
    title: "Best Chapter Recognition",
    detail:
      "Awarded 'Best Small Chapter' at IEEE India Council — a testament to consistent excellence in programs, membership, and outreach.",
  },
];

export interface NewsItem {
  date: string;
  category: "Award" | "Event" | "Opportunity" | "Partnership";
  title: string;
  summary: string;
  href: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "Aug 2025",
    category: "Award",
    title: "SSCS Kerala bags Best Small Chapter Award",
    summary:
      "The chapter has been recognized as the Best Small Chapter by IEEE India Council for 2025, honoring exceptional contributions across membership, events, and industry outreach.",
    href: "#",
  },
  {
    date: "Jul 2025",
    category: "Partnership",
    title: "ISM-aligned VLSI skilling program announced",
    summary:
      "A new industry-aligned VLSI and semiconductor skilling track, co-developed with India Semiconductor Mission partners, is scheduled to launch in August 2025.",
    href: "#",
  },
  {
    date: "Jun 2025",
    category: "Event",
    title: "National Women in Circuits Hackathon — ₹2L+ prizes",
    summary:
      "Registrations open for the WiC National Hackathon on 'Edge AI Accelerators on FPGA' with cash prizes, mentorship, and startup incubation opportunities.",
    href: "#",
  },
  {
    date: "May 2025",
    category: "Opportunity",
    title: "ISSCC 2026 Travel Grants — chapter pre-review open",
    summary:
      "Students presenting at ISSCC 2026 can now apply for the SSCS Kerala chapter-level pre-review and travel grant recommendation support.",
    href: "#",
  },
];

export const globalReach = {
  region: "IEEE Region 10 · Asia Pacific",
  section: "IEEE Kerala Section",
  society: "IEEE Solid-State Circuits Society",
  globalChapters: "100+ Chapters worldwide",
  globalMembers: "10,000+ members globally",
  countries: "90+ countries represented",
  flagships: "4 Flagship Conferences annually",
  jsscImpact: "#1 cited journal in solid-state circuits",
};
