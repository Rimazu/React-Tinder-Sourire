import React from "react";

export const Star = ({active}) => (
  <svg className={`star ${active ? "active" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="inside" d="M25 38.2l-14.1 7.4 2.7-15.7L2.1 18.7l15.8-2.3L25 2.1l7.1 14.3 15.8 2.3-11.5 11.2 2.7 15.7z"/><path className="border" d="M25 4.4l5.9 12 .5.9 1 .2 13.3 1.9-9.6 9.4-.8.7.2 1 2.3 13.2-11.9-6.2-.9-.5-.9.5-11.9 6.2 2.3-13.2.2-1-.8-.7-9.6-9.4 13.3-1.9 1-.2.5-.9 5.9-12m0-4.5l-7.7 15.7L0 18l12.5 12.2-3 17.2L25 39.3l15.5 8.1-3-17.2L50 18l-17.3-2.5L25-.1z"/></svg>
);

export const Like = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 2.8c12.2 0 22.2 10 22.2 22.2S37.2 47.2 25 47.2 2.8 37.2 2.8 25 12.8 2.8 25 2.8M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0z"/><path d="M39.4 17.8c-.6-.8-1.7-.9-2.5-.4L19.2 30.6l-4.6-6.2c-.6-.8-1.7-.9-2.5-.4-.8.6-.9 1.7-.4 2.5l5.7 7.6c.6.8 1.7.9 2.5.4l.1-.1 19-14.2c.8-.5.9-1.6.4-2.4z"/></svg>
);

export const Dislike = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 2.8c12.2 0 22.2 10 22.2 22.2S37.2 47.2 25 47.2 2.8 37.2 2.8 25 12.8 2.8 25 2.8M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0z"/><path d="M28.4 25l8-8c.6-.6.6-1.5 0-2.1l-.6-.6c-.6-.6-1.5-.6-2.1 0l-8 8-8-8c-.6-.6-1.5-.6-2.1 0l-.6.6c-.6.6-.6 1.5 0 2.1l8 8-8 8c-.6.6-.6 1.5 0 2.1l.6.6c.6.6 1.5.6 2.1 0l8-8 8 8c.6.6 1.5.6 2.1 0l.6-.6c.6-.6.6-1.5 0-2.1l-8-8z"/></svg>
);