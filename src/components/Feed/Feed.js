import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchFeed from "../../store/feed-action";
import FeedItem from "../FeedItem/FeedItem";

const Feed = () => {
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.feed.feeds);
  const isLoading = useSelector((state) => state.feed.isLoading);
  const error = useSelector((state) => state.feed.error);
  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);
  let content = <p>found no movies.</p>;
  if (feeds.length > 0) {
    content = feeds.map((i, index) => (
      <span key={index}>
        <FeedItem title={i.title} link={i.link} />
      </span>
    ));
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>loading...</p>;
  }
  return <>{content}</>;
};
export default Feed;
