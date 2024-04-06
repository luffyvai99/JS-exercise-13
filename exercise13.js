function cardDetails(thumbnail, duration, title, channelName, views, date) {
  let viewsCounter;
  if (views < 1000) {
    viewsCounter = views;
  } else if (views < 1000000) {
    viewsCounter = views / 1000 + " k";
  } else {
    viewsCounter = views / 1000000 + " M";
  }

  let html = `   <div class="card">
  <div class="videoThumbnail">
  <img
    src="${thumbnail}"
    alt=""
  />
  <div id="duration">${duration}</div>
</div>
<div class="channelDetails">
  <div id="channelLogo"></div>
  <div class="channelContentDetails">
    <div id="title">${title}</div>

    <div id="channelName">${channelName}</div>

    <div class="channel-dataStatus">
      <div id="views">${viewsCounter}  views</div>
      <span>|</span>
      <div id="uploadDate">${date}  day ago</div>
    </div>
  </div>
</div> 
</div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

cardDetails(
  "https://i.ytimg.com/vi/3SeOVVJXOUo/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAugCigIMCAAQARhyIEAoTTAP&rs=AOn4CLB7ERpw8JZzeRz6zU5OhlkqP6Gg0w",
  "59:54",
  "I don't know:) | 1 hours lofi song",
  "Lofi Boy",
  56000,
  1
);
cardDetails(
  "https://i.ytimg.com/vi/RFx0PnTqxfI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBh-mZZqFdPnvGBwgmCnbpMTRLUPw",
  "25:12",
  "Javascript in-depth",
  "procoddr",
  56000,
  1
);
cardDetails(
  "https://i.ytimg.com/vi/vlAWzsGd-Yk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVCAxihZOHgBxBndjy732zxdQ17Q",
  "25:12",
  "Sigma Batch OP #video 120",
  "Code with Harry",
  5600000,
  100
);
