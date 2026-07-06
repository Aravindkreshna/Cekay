export type WorkCategory =
  | "Brand Films"
  | "Launch Campaigns"
  | "Product Films"
  | "Founder Stories"
  | "Corporate";

export type Project = {
  slug: string;
  name: string;
  brand: string;
  year: string;
  category: WorkCategory;
  brief: string;
  result: string;
  industry: string;
  heroImage: string;
  vimeoId: string;
  audience: string;
  goal: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
};

export const credibilityItems = [
  "Brand Films",
  "Launch Campaigns",
  "Investor Stories",
  "Product Films",
  "Founder Narratives",
  "OTT Commercials"
];

export const featuredProjects: Project[] = [
  {
    slug: "altura-residences",
    name: "Altitude of Trust",
    brand: "Altura Residences",
    year: "2025",
    category: "Brand Films",
    brief: "A luxury real estate brand entering Chennai needed to look established from day one.",
    result: "Repositioned a market entrant into a premium-category contender in 6 weeks.",
    industry: "Luxury Real Estate",
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    vimeoId: "76979871",
    audience: "HNIs and aspirational buyers who evaluate detail before they trust a promise.",
    goal: "Create a flagship brand film that elevated perceived value before the first site visit.",
    approach: [
      "We framed the project as an emotional decision first and a property decision second.",
      "The film leaned into restraint, architecture, and atmosphere instead of hard-selling amenities.",
      "Supporting stills and short edits extended the film into launch assets for sales and investor meetings."
    ],
    deliverables: [
      "1 x Hero Brand Film (2:30)",
      "2 x Social Cutdowns (60s and 30s)",
      "1 x Investor Presentation Edit"
    ],
    outcomes: [
      "Used in investor decks and launch presentations across Chennai.",
      "Lifted top-of-funnel perception with a premium visual identity before launch week."
    ]
  },
  {
    slug: "nexa-medtech",
    name: "Precision in Motion",
    brand: "Nexa MedTech",
    year: "2025",
    category: "Product Films",
    brief: "A healthcare product launch needed to feel both clinically credible and commercially memorable.",
    result: "Turned a complex product story into a clean launch narrative the sales team could actually use.",
    industry: "HealthTech",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    vimeoId: "327077649",
    audience: "Hospital buyers, administrators, and distributors who need clarity fast.",
    goal: "Condense technical value into a launch film that sales teams could deploy across channels.",
    approach: [
      "We structured the film around transformation: from complicated process to confident adoption.",
      "Macro product shots and measured pacing kept the film premium while preserving clarity.",
      "We avoided jargon overload and wrote for decision-makers, not just internal teams."
    ],
    deliverables: [
      "1 x Launch Film (1:45)",
      "3 x Product Feature Snippets",
      "1 x Trade Show Display Loop"
    ],
    outcomes: [
      "Deployed across product demos, expos, and pitch meetings.",
      "Helped align internal sales messaging around one clear story."
    ]
  },
  {
    slug: "foundry-capital",
    name: "Built to Convince",
    brand: "Foundry Capital",
    year: "2024",
    category: "Corporate",
    brief: "An investment house needed a founder-facing film that felt intimate, sharp, and high trust.",
    result: "Created a founder narrative used in meetings, private events, and recruitment conversations.",
    industry: "Finance",
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    vimeoId: "22439234",
    audience: "Founders and partners looking for conviction, stability, and long-term thinking.",
    goal: "Make the brand feel like a strategic partner rather than just another funding source.",
    approach: [
      "We wrote the film around belief systems instead of balance-sheet language.",
      "Interview-led storytelling gave the piece authority without making it cold.",
      "The visual treatment borrowed from cinema trailers more than corporate content."
    ],
    deliverables: [
      "1 x Founder Story Film (2:10)",
      "2 x Event Edits",
      "1 x Recruitment Culture Cut"
    ],
    outcomes: [
      "Used in private founder meets and hiring conversations.",
      "Strengthened brand trust by giving the firm a more human, articulate face."
    ]
  }
];

export const services = [
  {
    title: "Brand Films",
    description:
      "The flagship. A 90-second to 3-minute cinematic film that captures who you are, who you are for, and why you exist.",
    bestFor: "Positioning, premium brands, rebranding moments",
    investment: "Starting ₹5 Lakhs"
  },
  {
    title: "Product Launch Films",
    description:
      "Films designed to make a product arrival feel precise, desirable, and impossible to ignore.",
    bestFor: "Launches, category education, new market entries",
    investment: "Starting ₹6 Lakhs"
  },
  {
    title: "Founder & Leadership Stories",
    description:
      "Human-led films that build trust by putting the right voice, conviction, and story in front of the audience.",
    bestFor: "Trust-building, employer brand, founder visibility",
    investment: "Starting ₹4.5 Lakhs"
  },
  {
    title: "Investor & Corporate Films",
    description:
      "Strategic films that help serious businesses explain vision, capability, and momentum without sounding generic.",
    bestFor: "Fundraising, company narratives, internal alignment",
    investment: "Starting ₹7 Lakhs"
  },
  {
    title: "Social Media Campaigns",
    description:
      "Multi-asset campaign edits engineered for attention across social, paid ads, and launch bursts.",
    bestFor: "Performance campaigns, awareness pushes, content systems",
    investment: "Starting ₹3 Lakhs"
  },
  {
    title: "Event & Documentation Films",
    description:
      "High-polish event storytelling that turns moments on ground into assets with long shelf life.",
    bestFor: "Summits, internal events, launches, brand archives",
    investment: "Starting ₹2.5 Lakhs"
  }
] as const;

export const processStages = [
  {
    title: "Discover",
    timeline: "Week 1",
    description:
      "Before we write a single word of script, we spend time understanding your brand at a deeper level than most agencies ever will.",
    points: [
      "Brand positioning workshop",
      "Competitor and audience mapping",
      "Goal alignment and success metrics",
      "Creative brief intake"
    ]
  },
  {
    title: "Strategy & Concept",
    timeline: "Week 1-2",
    description:
      "We present 2-3 creative directions with moodboards, emotional logic, references, and narrative intent.",
    points: [
      "2-3 creative concepts",
      "Moodboard and visual direction",
      "Script draft and revision round"
    ]
  },
  {
    title: "Pre-Production",
    timeline: "Week 2-3",
    description:
      "Everything that happens before the camera rolls determines everything that happens after.",
    points: [
      "Location scouting and approvals",
      "Casting if required",
      "Shot list and storyboard finalization",
      "Crew, equipment, and schedule lock"
    ]
  },
  {
    title: "Production",
    timeline: "Week 3-4",
    description:
      "Shoot day is the most visible part. But by now, most of the work is already done.",
    points: [
      "Professional shoot with full crew",
      "Director, DOP, sound, lighting, art",
      "Daily footage review"
    ]
  },
  {
    title: "Post-Production & Delivery",
    timeline: "Week 4-6",
    description: "The film comes alive in the edit.",
    points: [
      "Offline edit and client review",
      "Color grading",
      "Sound design and music",
      "Final export formats and deployment guide"
    ]
  }
] as const;

export const briefQuestions = [
  "What does your brand do, in one clear sentence?",
  "What are you trying to achieve with this film?",
  "Who is the audience we need to move?",
  "What should they think, feel, or do after watching?",
  "What brand perception are you trying to build or change?",
  "What platforms will this film live on?",
  "Are there reference films, campaigns, or visual worlds you admire?",
  "What is your timeline?",
  "What budget range are we working within?",
  "Anything else we should know before we build the concept?"
] as const;

export const blogPosts = [
  {
    slug: "why-brand-films-outperform-generic-corporate-videos",
    title: "Why Brand Films Outperform Generic Corporate Videos",
    excerpt:
      "The difference between information and memory is the difference between being seen and being remembered.",
    date: "June 2026"
  },
  {
    slug: "how-to-brief-a-production-studio-for-better-work",
    title: "How to Brief a Production Studio for Better Work",
    excerpt:
      "The strongest films usually begin with the strongest inputs. Here is what clarity looks like before production starts.",
    date: "May 2026"
  }
] as const;

export const stats = [
  { value: "12", label: "Films Produced" },
  { value: "₹2.5Cr", label: "In Brand Value" },
  { value: "8", label: "Cities Shot In" }
] as const;
