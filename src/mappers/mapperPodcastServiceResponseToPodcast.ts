import type { ApiPodcastResponse, Podcast } from "../types";

export const mapperPodcastsResponseToPodcasts = (
  podcastServiceResponse: ApiPodcastResponse
): Podcast[] => {
  return podcastServiceResponse.feed.entry.map((entry) => ({
    id: entry.id.attributes["im:id"],
    title: entry["im:name"].label,
    author: entry["im:artist"].label,
    description: entry.summary.label,
    image: entry["im:image"][2].label,
    episodes: [],
    releaseDate: new Date(entry["im:releaseDate"].label),
  }));
};
