export interface Mix {
  id: string;
  title: string;
  coverImage: string;
  duration: string;
  genre: string;
  year: number;
  url: string;
  downloadUrl: string;
  popularity: number;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  ticketUrl: string;
  type: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}