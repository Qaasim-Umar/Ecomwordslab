export const services = [
  {
    id: "product-descriptions",
    title: "Product Description Copywriting",
    outcome: "Turn browsers into buyers",
    description:
      "Crafting persuasive product descriptions that highlight benefits, address customer pain points, and increase conversions.",
    icon: "FileText",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    outcome: "Keep customers coming back",
    description:
      "Creating welcome sequences, abandoned cart emails, promotional campaigns, and customer retention emails that drive sales.",
    icon: "Mail",
  },
  {
    id: "landing-pages",
    title: "Landing Page Copywriting",
    outcome: "Convert traffic into revenue",
    description:
      "Writing conversion-focused landing pages designed to generate leads, sales, and customer engagement.",
    icon: "Target",
  },
  {
    id: "content-strategy",
    title: "Content Strategy & Planning",
    outcome: "Build a brand people remember",
    description:
      "Developing content plans and messaging strategies that help brands maintain consistency and connect with their target audience.",
    icon: "Map",
  },
  {
    id: "website-copywriting",
    title: "Website Copywriting",
    outcome: "Make every page earn its place",
    description:
      "Creating clear, compelling website content that communicates brand value and encourages action.",
    icon: "Monitor",
  },
  {
    id: "brand-messaging",
    title: "Brand Messaging",
    outcome: "Stand out in a crowded market",
    description:
      "Helping businesses define their unique voice, positioning, and messaging to stand out in competitive markets.",
    icon: "Megaphone",
  },
  {
    id: "sales-copy",
    title: "Sales Copy",
    outcome: "Motivate customers to act now",
    description:
      "Writing persuasive copy for product launches, promotions, and marketing campaigns that motivate customers to buy.",
    icon: "TrendingUp",
  },
  {
    id: "content-audits",
    title: "Content Audits",
    outcome: "Find the gaps costing you sales",
    description:
      "Reviewing existing content and identifying opportunities to improve engagement, conversions, and overall performance.",
    icon: "Search",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "5 Product Description Mistakes Killing Your Conversions",
    date: "May 28, 2026",
    category: "Copywriting",
    excerpt:
      "Most e-commerce brands write product descriptions that describe features, not benefits. Here's how to flip the script and write copy that sells.",
    slug: "product-description-mistakes",
  },
  {
    id: "2",
    title: "The Email Sequence Every E-Commerce Store Needs (But Most Skip)",
    date: "May 14, 2026",
    category: "Email Marketing",
    excerpt:
      "A well-crafted welcome sequence can generate 3x the revenue of a standard promotional email. Here's the exact flow we build for our clients.",
    slug: "email-sequence-ecommerce",
  },
  {
    id: "3",
    title: "How to Build a Brand Voice That Customers Actually Remember",
    date: "April 30, 2026",
    category: "Brand Strategy",
    excerpt:
      "Inconsistent messaging is one of the biggest reasons shoppers don't return. Here's a practical framework for defining and maintaining your brand voice.",
    slug: "brand-voice-framework",
  },
];

export const serviceDropdownOptions = services.map((s) => s.title);
