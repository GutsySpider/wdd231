const myAPI = "7928a184-730a-480f-a514-d328337f98dc"

const account1 = "GutsySpider"
const platform = "xbl"

const gutsySpider = `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${account1}`

async function apiFetchCurrent() {
  try {
    const response = await fetch(gutsySpider);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayCurrentWeather(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetchCurrent();
