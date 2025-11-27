export interface Cafe {
  id: string;
  entryCode: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  communityRating: number;
  communityStamps: number;
  dateVisited: string;
  heroImage: string;
  thumbnails: string[];
  review: {
    espressoNotes: string;
    milkTexture: string;
    balance: string;
    temperature: string;
    cupType: string;
  };
  reviewer: string;
  placeAssessment: string;
  tags: string[];
  userStamped: boolean;
  starDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export const mockCafes: Cafe[] = [
  {
    id: 'cafe-001',
    entryCode: 'MEL-0042-FW',
    name: 'The Daily Grind',
    city: 'Melbourne',
    country: 'Australia',
    rating: 4.5,
    communityRating: 4.3,
    communityStamps: 128,
    dateVisited: '24 NOV 2025',
    heroImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzOTQ4NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjM5NTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzOTgzOTU1fDA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    review: {
      espressoNotes: 'Rich chocolate with hints of caramel, well-balanced acidity',
      milkTexture: 'Silky microfoam, perfectly steamed at 65°C',
      balance: 'Excellent harmony between espresso and milk, neither overpowering',
      temperature: 'Ideal drinking temperature, stayed consistent',
      cupType: 'Ceramic tulip cup, 180ml capacity'
    },
    reviewer: 'Sarah Mitchell',
    placeAssessment: 'Quiet atmosphere perfect for working. Natural light from large windows, comfortable seating with power outlets at every table. Soft jazz background music creates a productive environment. Good for solo work or small meetings.',
    tags: ['quiet', 'oat-friendly', 'roastery'],
    userStamped: false,
    starDistribution: { 5: 78, 4: 36, 3: 12, 2: 2, 1: 0 }
  },
  {
    id: 'cafe-002',
    entryCode: 'LON-0128-FW',
    name: 'Monmouth Coffee',
    city: 'London',
    country: 'United Kingdom',
    rating: 4.8,
    communityRating: 4.6,
    communityStamps: 342,
    dateVisited: '12 NOV 2025',
    heroImage: 'https://images.unsplash.com/photo-1747160255700-4bb175c22bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2NDAyMDg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjM5NTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzOTQ4NzkxfDA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    review: {
      espressoNotes: 'Bright citrus notes with berry undertones',
      milkTexture: 'Velvety smooth, excellent integration',
      balance: 'Exceptional, allows coffee character to shine',
      temperature: 'Perfect, served at ideal temperature',
      cupType: 'White ceramic cup with handle'
    },
    reviewer: 'James Chen',
    placeAssessment: 'Traditional London coffee house atmosphere. Bustling and energetic, always busy with locals. Standing room only during peak hours. Not ideal for long work sessions but perfect for a quick quality coffee. Historic charm with exposed brick.',
    tags: ['classic', 'roastery', 'fruity'],
    userStamped: true,
    starDistribution: { 5: 298, 4: 38, 3: 4, 2: 2, 1: 0 }
  },
  {
    id: 'cafe-003',
    entryCode: 'TOK-0067-FW',
    name: 'Blue Bottle Roppongi',
    city: 'Tokyo',
    country: 'Japan',
    rating: 4.2,
    communityRating: 4.4,
    communityStamps: 215,
    dateVisited: '08 NOV 2025',
    heroImage: 'https://images.unsplash.com/photo-1625225314254-6ddc29a3dd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2FmZXxlbnwxfHx8fDE3NjM5OTI0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjM5NTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzOTQ4NzkxfDA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    review: {
      espressoNotes: 'Clean, nutty profile with subtle sweetness',
      milkTexture: 'Good microfoam, slightly thinner than ideal',
      balance: 'Well-balanced, smooth drinking experience',
      temperature: 'Good temperature, maintained well',
      cupType: 'Minimalist white cup, simple design'
    },
    reviewer: 'Yuki Tanaka',
    placeAssessment: 'Minimalist Japanese aesthetic with clean lines and natural wood. Very quiet with a peaceful atmosphere. Popular with students and remote workers. Limited seating but well-spaced tables. Respectful noise level maintained by patrons.',
    tags: ['quiet', 'oat-friendly', 'classic'],
    userStamped: false,
    starDistribution: { 5: 134, 4: 62, 3: 16, 2: 3, 1: 0 }
  },
  {
    id: 'cafe-004',
    entryCode: 'NYC-0189-FW',
    name: 'La Colombe Tribeca',
    city: 'New York',
    country: 'United States',
    rating: 4.6,
    communityRating: 4.5,
    communityStamps: 456,
    dateVisited: '01 NOV 2025',
    heroImage: 'https://images.unsplash.com/photo-1464869372688-a93d806be852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjQwMjA4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzOTgzOTU1fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjM5NTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    review: {
      espressoNotes: 'Bold, chocolatey with caramel finish',
      milkTexture: 'Creamy, well-integrated microfoam',
      balance: 'Strong coffee presence, excellent depth',
      temperature: 'Hot but drinkable immediately',
      cupType: 'Branded ceramic cup with logo'
    },
    reviewer: 'Michael Rodriguez',
    placeAssessment: 'Urban NYC vibe with industrial touches. High energy environment with constant flow of customers. Good for quick meetings but can get loud during lunch hours. Fast WiFi and plenty of outlets. Great people-watching location.',
    tags: ['roastery', 'classic', 'oat-friendly'],
    userStamped: true,
    starDistribution: { 5: 312, 4: 118, 3: 22, 2: 4, 1: 0 }
  },
  {
    id: 'cafe-005',
    entryCode: 'PAR-0093-FW',
    name: 'Café Loustic',
    city: 'Paris',
    country: 'France',
    rating: 4.7,
    communityRating: 4.6,
    communityStamps: 287,
    dateVisited: '28 OCT 2025',
    heroImage: 'https://images.unsplash.com/photo-1662646133359-7cf4d2ab932e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpc2lhbiUyMGNhZmV8ZW58MXx8fHwxNzY0MDIwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzOTgzOTU1fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1662646133359-7cf4d2ab932e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpc2lhbiUyMGNhZmV8ZW58MXx8fHwxNzY0MDIwODg4fDA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    review: {
      espressoNotes: 'Fruity, floral notes with bright acidity',
      milkTexture: 'Perfect velvety texture, exceptional',
      balance: 'Masterful balance, complex yet approachable',
      temperature: 'Ideal serving temperature',
      cupType: 'Artisan ceramic, handmade feel'
    },
    reviewer: 'Sophie Dubois',
    placeAssessment: 'Charming Parisian neighborhood café with authentic local atmosphere. Small intimate space that fills up quickly. Perfect for morning coffee and conversation. Traditional French café culture with friendly service. Not laptop-friendly due to limited space.',
    tags: ['fruity', 'quiet', 'classic'],
    userStamped: false,
    starDistribution: { 5: 234, 4: 46, 3: 6, 2: 1, 1: 0 }
  }
];