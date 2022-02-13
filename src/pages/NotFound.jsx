import React from 'react';

const style={
	"color": "white",
	"margin-top": 50+"vh", "box-shadow": "2px 2px 12px 2px white",
  // "text-shadow":"rgb(11 255 255) -4px 1px 0px, rgb(255 0 212) -1px 1px 130px, rgb(11 255 255) -8px 1px 220px",
	"text-shadow":"rgb(11 255 255) -4px 1px 0px, rgb(255 0 212) -1px 1px 130px, rgb(11 255 255) -4px 20px 20px",
};

const NotFound =()=> { return (

<h1 style={style}>Nothing to do here...</h1>

); }; export { NotFound };