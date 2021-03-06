export const SLACK_INCOMING_WEBHOOK = PropertiesService.getScriptProperties().getProperty("SLACK_INCOMING_WEBHOOK");
export const SLACK_CHANNEL_NAME = PropertiesService.getScriptProperties().getProperty("SLACK_CHANNEL_NAME");

export const RIZE_PUSH7_URLS = {
  shibuya: "https://rizeclinic.app/clinics/8/pushes",
  ginza: "https://rizeclinic.app/clinics/15/pushes",
  shinjuku: "https://rizeclinic.app/clinics/2/pushes",
}
