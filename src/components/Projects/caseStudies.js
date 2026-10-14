import kyodo from "../../Assets/Projects/kyodo.jpg";
import bloom from "../../Assets/Projects/bloom.jpg";

// Long-form write-ups for the featured projects. Each one renders at
// /project/<slug> through CaseStudy.js and as a featured card on /project.
const caseStudies = [
  {
    slug: "sales-call-analysis",
    title: "AI Sales Call Analysis",
    context: "Our Town America · 2026",
    badge: "Production system at work",
    summary:
      "A pipeline that transcribes sales calls, works out who said what, and uses a local LLM to explain why calls end in a sign-up or a “not interested”.",
    tech: ["Whisper STT", "Speaker diarization", "Local LLM"],
    problem:
      "Every sales call holds the answer to why a prospect signed up or said no, but that answer is buried in hours of recordings. Sales coaching needed a way to see the objections and talk tracks behind each outcome without listening to every call.",
    role: "I architected the pipeline end to end at Our Town America.",
    flowTitle: "How a call moves through the pipeline",
    flow: [
      { label: "Call recording" },
      { label: "Speech to text", detail: "Whisper" },
      { label: "Who said what", detail: "Speaker diarization" },
      { label: "Classify the outcome", detail: "Local LLM" },
      { label: "Coaching insights", detail: "Objections and talk tracks" },
    ],
    built: [
      "Transcription with Whisper speech-to-text, followed by speaker diarization so the transcript separates the sales rep from the prospect.",
      "A local LLM that classifies each call’s outcome, such as signed up or not interested.",
      "Analysis that surfaces the objections and talk tracks behind each outcome, so coaching can focus on what actually moves a call.",
      "Because the model runs locally, call transcripts are not sent to a third-party AI API.",
    ],
    results: [
      "Used for sales coaching, comparing what happens on calls that sign up against calls that don’t.",
    ],
    links: [],
  },
  {
    slug: "kyodo-catalog",
    title: "Kyodo Catalog",
    context: "Client project · 2026",
    badge: "Built end to end, solo",
    img: kyodo,
    imgPosition: "left top",
    summary:
      "A private B2B catalog and order-request app for an agricultural machinery and spare-parts business, replacing a physical catalog and spreadsheets.",
    tech: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Cloudflare R2",
    ],
    problem:
      "The business sold 1,200 products (chainsaws, brushcutters, sprayers, water pumps, engines, and their spare parts) from a physical catalog, with orders tracked in Excel spreadsheets. Clients had no easy way to see what was available, and staff had no single record of each order’s status.",
    role: "I built it from the client’s concept, owning the frontend, backend, branding, and UX/UI.",
    flowTitle: "Order lifecycle, enforced on the server",
    flow: [
      { label: "Draft", detail: "Client builds a list" },
      { label: "Sent", detail: "Dispatchers get an email" },
      { label: "In review", detail: "Stock checked per item" },
      { label: "Reviewed", detail: "Client gets an email" },
      { label: "Approved or rejected" },
    ],
    built: [
      "Three roles with their own pages: clients browse and order, dispatchers check real stock item by item, and admins approve new accounts and manage the catalog.",
      "A server-side state machine for order status, with every change recorded in a history table, so an order can never skip a step.",
      "Sign-up through Clerk, with every new account held as pending until an admin approves it and assigns a role.",
      "Product images stored in Cloudflare R2 and processed with sharp into thumbnail, medium, and full-size WebP versions.",
      "React 19, TypeScript, and Vite on the frontend; Express, Prisma, and PostgreSQL on the backend; email notifications through Resend. Deployed on Vercel and Railway.",
    ],
    results: [
      "Replaced the physical catalog and Excel spreadsheets with one system covering 1,200 products.",
      "Every order now has a full, auditable status history.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sofyccn/catalog" },
      { label: "Live app", href: "https://catalog-api-ten.vercel.app" },
    ],
  },
  {
    slug: "bloom",
    title: "Bloom",
    context: "RARE Lab, University of South Florida · 2025",
    badge: "Published at ACM/IEEE HRI ’26",
    img: bloom,
    summary:
      "A low-cost, LLM-powered social robot. I built its voice pipeline and head-tracking, and co-authored the paper.",
    tech: ["Python", "Raspberry Pi", "Computer vision", "pypot", "LLM"],
    problem:
      "Most social robots used in research are expensive. Bloom explores how far a low-cost robot can go when it holds natural conversations through a large language model.",
    role: "Research intern through the Computing Research Association, at USF’s RARE Lab.",
    flowTitle: "How Bloom holds a conversation",
    flow: [
      { label: "Wake word" },
      { label: "Speech to text" },
      { label: "LLM response" },
      { label: "Text to speech" },
      { label: "Bloom replies" },
    ],
    built: [
      "The wake-word, speech-to-text, and text-to-speech pipeline that drives Bloom’s LLM-powered conversations.",
      "Head-tracking behavior that connects computer vision to Dynamixel motors through pypot, running on a Raspberry Pi.",
    ],
    results: [
      "Co-authored “Bloom Preview: A Low-Cost LLM-Powered Social Robot”, published in the companion proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction (HRI ’26).",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3776734.3794575" },
      {
        label: "GitHub",
        href: "https://github.com/TheRARELab/blossom-public/tree/ba62b2a5c6bc72c6a89a583e2d4abc9665427c34",
      },
    ],
  },
];

export default caseStudies;
