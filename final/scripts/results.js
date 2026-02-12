const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Gaming info for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Gamertag: ${myInfo.get('gamertag')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p><p>Your Phone Number: ${myInfo.get('phone')} </p>
<p><p>Your Gaming Platform: ${myInfo.get('platform')} </p>
<p>Information added on ${myInfo.get('hidden')}`