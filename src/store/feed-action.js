import { sliceActions } from "./feed-slice";
const RSS_URL = `https://news.bitcoin.com/feed/`;
const fetchFeed = () => {
  return (dispatch) => {
    dispatch(sliceActions.isLoading({status: true}))
    fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        console.log(data);
        const items = data.querySelectorAll("item");
        console.log(items);
        const feeds = [];
        items.forEach((el, i) => {
          if (i <= 3) {
            feeds.push({
              title: el.querySelector("title").innerHTML,
              link: el.querySelector("link").innerHTML,
            });
            console.log(el.querySelector("link").innerHTML);
            console.log(el.querySelector("title").innerHTML);
          } else {
            return;
          }
        });
        dispatch(sliceActions.replaceFeed({feeds: feeds}));
        dispatch(sliceActions.isLoading({status: false}))
      })
      .catch((error) => {
        dispatch(sliceActions.hasError({error: error.message}))
      });
  };
};
export default fetchFeed