import Echo from "./Echo";
import { SLACK_INCOMING_WEBHOOK, SLACK_CHANNEL_NAME, RIZE_PUSH7_URLS } from "./const"
import { postSlack } from "./postSlack";

global.main = () => {
  // postSlack(
  //   {
  //     incommingUrl: SLACK_INCOMING_WEBHOOK,
  //     channelName: SLACK_CHANNEL_NAME,
  //     username: "リゼ通知bot",
  //     text: "test",
  //     iconEmoji: ":ghost:"
  //   }
  // )

  Logger.log(fetchLatestRizeUpdatedAt())

  const echo = new Echo();
  echo.print("world.");
};

const fetchLatestRizeUpdatedAt = () => {
  const names: string[] = Object.keys(RIZE_PUSH7_URLS);
  const latestUpdatedAt = {}
  names.forEach(name => {
    const html = UrlFetchApp.fetch(RIZE_PUSH7_URLS[name], {
      method: "get",
    }).getContentText()
    const updatedAt = Parser.data(html)
      .from("<div class=\"pushesList_text\">")
      .to("</span>")
      .build()
      .replace("<span>", "")
    
    latestUpdatedAt[name] = updatedAt;
  })
  
  return latestUpdatedAt;
}
