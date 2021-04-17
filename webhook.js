setInterval(() => {
fetch('TOKEN LINK',{
 method: 'POST',
 headers: {
        'content-type': 'application/json'
    },
body: JSON.stringify({
content:'MESSAGE YOU WOULD LIKE TO SEND'
})
})
}, 500);
