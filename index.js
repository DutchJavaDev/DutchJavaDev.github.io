document.addEventListener("DOMContentLoaded",async function(){
    await fetch('https://api.db-ip.com/v2/free/self', function(data) {
        console.log(JSON.stringify(data, null, 2));
      });
});