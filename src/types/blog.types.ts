export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  published_at: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  photo?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}
