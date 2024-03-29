export interface Podcast {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  releaseDate: Date;
}

export interface ApiPodcastServiceResponse {
  feed: Feed;
}

export interface Feed {
  entry: Entry[];
}

export interface Entry {
  "im:name": ImName;
  "im:image": ImImage[];
  summary: Summary;
  title: Title;
  id: Id;
  "im:artist": ImArtist;
  "im:releaseDate": ImReleaseDate;
}

export interface ImName {
  label: string;
}
export interface ImImage {
  label: string;
}
export interface Summary {
  label: string;
}
export interface Title {
  label: string;
}
export interface Id {
  attributes: Attributes;
}
export interface Attributes {
  "im:id": string;
}
export interface ImArtist {
  label: string;
}
export interface ImReleaseDate {
  label: string;
}
