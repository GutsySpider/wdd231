// const myAPI = "7928a184-730a-480f-a514-d328337f98dc"

// const account1 = "GutsySpider"
// const platform = "xbl"

// const gutsySpider = `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${account1}`

// async function apiFetchCurrent() {
//   try {
//     const response = await fetch(gutsySpider);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // testing only
//       displayCurrentWeather(data); // uncomment when ready
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// apiFetchCurrent();

const PLAYER_NAME = 'Ninja'; // Example player
const PLATFORM = 'epic'; // Example platform
const API_KEY = '5a3aeb64-fdc8-4b16-beaa-b4d3ea360b2b'

async function getFortniteStats(playerName, platform) {
    const url = `https://fortnite-api.com?${playerName}&accountType=${platform}`
     try {
        const response = await fetch(url, {
            headers: {
                'Authorization': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Player Stats:', data);
        // You can then display this data in your web page
        displayStats(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayStats(data) {
    // Example of how to use the data
    const lifetimeStats = data.data.stats.all.overall;
    console.log(`Lifetime Wins: ${lifetimeStats.wins}`);
    console.log(`Lifetime Kills: ${lifetimeStats.kills}`);
}

getFortniteStats(PLAYER_NAME, PLATFORM);
