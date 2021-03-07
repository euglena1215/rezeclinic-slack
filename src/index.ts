import { SLACK_INCOMING_WEBHOOK, SLACK_CHANNEL_NAME, RIZE_PUSH7_URLS } from "./const"
import { postSlack } from "./postSlack";
import { persist } from "./persist"

global.main = () => {
  const names: string[] = Object.keys(RIZE_PUSH7_URLS);
  names.forEach(name => {
    const html = UrlFetchApp.fetch(RIZE_PUSH7_URLS[name], {
      method: "get",
    }).getContentText()
    const updatedAt = Parser.data(html)
      .from("<div class=\"pushesList_text\">")
      .to("</span>")
      .build()
      .replace("<span>", "")
  
    const existsUpdatedAt = PropertiesService.getScriptProperties().getProperty(`latestUpdatedAt__${name}`);

    if (updatedAt !== existsUpdatedAt) {
      const body = Parser.data(html)
        .from("<p>")
        .to("</p>")
        .build()
        .replace(/<a href="(.+)">(.+)<\/a>/, '<$1|$2>'); // a tag を slack のリンクに変換

      persist(`latestUpdatedAt__${name}`, updatedAt);
      postSlack(
        {
          incommingUrl: SLACK_INCOMING_WEBHOOK,
          channelName: SLACK_CHANNEL_NAME,
          username: "リゼ通知bot",
          text: body,
          iconEmoji: ":bearded_person::skin-tone-2:"
        }
      );
    }
  })
};
