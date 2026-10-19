export interface WorkItem {
  id: string;
  number: string;
  category: 'UGC Videos' | 'Product Visuals' | 'Ad Creatives';
  categoryLabel: string;
  title: string;
  badge: string;
  image: string;
  isVideo?: boolean;
  aspect?: string;
  description?: string;
  duration?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'headphone',
    number: '01',
    category: 'UGC Videos',
    categoryLabel: 'UGC VIDEO AD',
    title: 'Headphone Lifestyle Ad',
    badge: 'SPEC CONCEPT',
    image: '/images/hero-headphones.jpg',
    isVideo: true,
    duration: '0:15',
    description: 'High-energy lifestyle UGC hook designed to showcase audio immersion and street-ready industrial design.'
  },
  {
    id: 'jewellery',
    number: '02',
    category: 'Product Visuals',
    categoryLabel: 'PRODUCT VISUALS',
    title: 'Jewellery Campaign',
    badge: 'SPEC CONCEPT',
    image: '/images/jewellery-gold.jpg',
    isVideo: false,
    description: 'Macro studio campaign highlighting diamond clarity, gold filigree textures, and warm cinematic lighting.'
  },
  {
    id: 'fashion',
    number: '03',
    category: 'UGC Videos',
    categoryLabel: 'UGC VIDEO AD',
    title: 'Fashion Product Video',
    badge: 'SPEC CONCEPT',
    image: '/images/fashion-ugc.jpg',
    isVideo: true,
    duration: '0:12',
    description: 'Relatable creator-first format showing authentic outfit styling and fit in real urban environments.'
  },
  {
    id: 'fragrance',
    number: '04',
    category: 'Product Visuals',
    categoryLabel: 'PRODUCT VISUALS',
    title: 'Fragrance Visuals',
    badge: 'SPEC CONCEPT',
    image: '/images/fragrance-aurelis.jpg',
    isVideo: false,
    description: 'Botanical luxury still showcasing Aurélis eau de parfum among delicate nocturnal white jasmine.'
  },
  {
    id: 'skincare',
    number: '05',
    category: 'Ad Creatives',
    categoryLabel: 'SOCIAL & AD CREATIVES',
    title: 'Skincare Campaign',
    badge: 'SPEC CONCEPT',
    image: '/images/skincare-sora.jpg',
    imageSecondary: '/images/skincare-model.jpg',
    isVideo: false,
    description: 'Split-creative performance ad highlighting clean natural ingredients paired with organic dewy skin application.'
  } as WorkItem & { imageSecondary?: string }
];

export const WHAT_WE_CREATE = [
  {
    number: '01',
    title: 'UGC-STYLE VIDEO ADS',
    description: 'Creator-inspired product videos, unboxing concepts, and short-form advertising.',
    image: '/images/hero-headphones.jpg',
    tag: 'Short-Form / High Conversion'
  },
  {
    number: '02',
    title: 'PRODUCT VISUALS',
    description: 'Distinctive product photography concepts and campaign visuals for digital brands.',
    image: '/images/jewellery-gold.jpg',
    tag: 'Macro / Studio Lighting'
  },
  {
    number: '03',
    title: 'SOCIAL & AD CREATIVES',
    description: 'Scroll-stopping promotional graphics, campaign assets, and creative variations.',
    image: '/images/skincare-sora.jpg',
    tag: 'Multi-Format / Performance'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand your product, brand, audience, and goals.',
    image: '/images/studio-bts.jpg'
  },
  {
    step: '02',
    title: 'CONCEPT',
    description: 'Develop the creative direction, hook, and storyboard.',
    image: '/images/camera-monitor.jpg'
  },
  {
    step: '03',
    title: 'CREATE',
    description: 'Produce the agreed video or visual assets.',
    image: '/images/hero-headphones.jpg'
  },
  {
    step: '04',
    title: 'DELIVER',
    description: 'Refine and deliver the approved files in the required formats.',
    image: '/images/fragrance-cta.jpg'
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    number: '01',
    name: 'STARTER',
    subtitle: 'A simple starting point for your next creative.',
    price: '₹999',
    popular: false,
    image: '/images/fashion-ugc.jpg',
    features: [
      '1 UGC-style video',
      '10–15 seconds',
      'Basic editing, music and text overlays',
      '1 revision'
    ],
    buttonText: 'Choose Starter'
  },
  {
    id: 'growth',
    number: '02',
    name: 'GROWTH',
    subtitle: 'More creative directions to explore and test.',
    price: '₹3,499',
    popular: true,
    image: '/images/jewellery-gold.jpg',
    features: [
      '3 UGC-style videos',
      '10–15 seconds each',
      'Different creative concepts or hooks',
      'Editing, music and text overlays',
      '1 revision per video'
    ],
    buttonText: 'Choose Growth'
  },
  {
    id: 'brand-pack',
    number: '03',
    name: 'BRAND PACK',
    subtitle: 'More creative variety for your brand.',
    price: '₹4,999',
    popular: false,
    image: '/images/sneaker-product.jpg',
    features: [
      '5 UGC-style videos',
      '10–15 seconds each',
      'Multiple creative directions',
      'Editing, music and text overlays',
      '1 revision per video'
    ],
    buttonText: 'Choose Brand Pack'
  }
];

export const FAQS = [
  {
    number: '01',
    question: 'What services does HighpoX offer?',
    answer: 'We create AI-assisted UGC-style video ads, short-form product videos, product visuals, and social advertising creatives tailored for digital brands and performance campaigns.'
  },
  {
    number: '02',
    question: 'What is the difference between UGC-style videos and real creator content?',
    answer: 'UGC-style videos capture the raw, relatable, and authentic look of user-generated content using cutting-edge production techniques, AI-assisted rendering, and custom storytelling. This gives you high-converting creator aesthetics with faster turnaround, precise messaging control, and significantly lower production overhead than coordinating multiple independent creators.'
  },
  {
    number: '03',
    question: 'What do I need to provide to get started?',
    answer: 'Just your product link, key selling propositions, brand guidelines (if any), and your target audience. If you have physical product photos, packshots, or existing assets, sharing them helps us match textures and aesthetics with pinpoint accuracy.'
  },
  {
    number: '04',
    question: 'How long does delivery take?',
    answer: 'Standard projects are typically delivered within 3 to 5 business days after concept approval. For express rush turnarounds or larger Brand Packs, we offer timeline schedules during the onboarding briefing.'
  },
  {
    number: '05',
    question: 'Can I request revisions?',
    answer: 'Yes! Every package includes dedicated revision cycles. Starter includes 1 revision, while Growth and Brand Pack include revisions per creative asset to ensure your messaging, timing, sound, and visual tone are dialed in.'
  },
  {
    number: '06',
    question: 'Can I request a custom package?',
    answer: 'Absolutely. If you require long-form assets, multi-variant testing sets, localization, 3D product renders, or ongoing monthly creative retainers, click "Need a custom package?" to collaborate directly on tailored deliverables.'
  },
  {
    number: '07',
    question: 'Can I use the creatives for paid advertisements?',
    answer: 'Yes, 100%. All delivered creatives come with commercial digital usage rights for Meta Ads (Instagram/Facebook), TikTok, YouTube Shorts, Google Ads, and your eCommerce store landing pages.'
  }
];
