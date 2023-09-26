export interface CrewMember {
    id: string;
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }