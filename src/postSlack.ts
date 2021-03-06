interface Prop {
  incommingUrl: string;
  channelName: string;
  username: string;
  text: string;
  iconEmoji: string;
}

export const postSlack = (props: Prop) => {
  const { incommingUrl, channelName, username, text, iconEmoji } = props;
  const payload = {
    channel: "#" + channelName,
    username,
    text,
    icon_emoji: iconEmoji
  }

  UrlFetchApp.fetch(incommingUrl, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  }).getContentText()
}
