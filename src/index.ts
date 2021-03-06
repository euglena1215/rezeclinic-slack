import Echo from "./Echo";
import { SLACK_INCOMING_WEBHOOK, SLACK_CHANNEL_NAME } from "./const"
import { postSlack } from "./postSlack";

global.main = () => {
  postSlack(
    {
      incommingUrl: SLACK_INCOMING_WEBHOOK,
      channelName: SLACK_CHANNEL_NAME,
      username: "リゼ通知bot",
      text: "test",
      iconEmoji: ":ghost:"
    }
  )

  const echo = new Echo();
  echo.print("world.");
};
