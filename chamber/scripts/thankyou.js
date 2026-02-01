const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Organization for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Organization Name: ${myInfo.get('organization')}</p>
<p><p>Your Phone Number: ${myInfo.get('phone')} </p>
<p>Your email is ${myInfo.get('email')}</p>
<p>Information added on ${myInfo.get('hidden')}`