export const persist = (key: string, value: string) => {
  PropertiesService.getScriptProperties().setProperty(key, value);
}
