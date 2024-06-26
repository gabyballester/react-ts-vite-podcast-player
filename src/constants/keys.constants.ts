export const key = {
  podcastList: "podcastList",
  episodeList: "episodeList",
  episodeDetail: (id: string) => "episodeDetail" + id,
  podcastDetail: (id: string) => "podcastDetail" + id,
};

export const transitionTimeout = 1800;

export const expirationTime = 1000 * 60 * 60 * 24 * 1; // 1 day in milliseconds
