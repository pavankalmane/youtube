export const suggestion_API = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEOS_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CHANNEL_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt`;
