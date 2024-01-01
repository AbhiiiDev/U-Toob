const API_KEY="AIzaSyB1RUvFj2QnjLZ9jvoz_jC5SmFyJ3RWwNE";

export const VIDEO_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+API_KEY;

export const handleSearch=(searchQuery)=>
{
     const SEARCH_URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=`+API_KEY;
     
     return SEARCH_URL;
}

