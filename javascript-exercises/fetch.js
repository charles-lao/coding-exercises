fetch('https://api.giphy.com/v1/gifs/translate?api_key=JnYXMXIz7DojCmqaBqBXRYnjderRshMV&s=cats', {
    mode: 'cors'
    })
    .then(function(response) {
        // successful response :)
    })
    .catch(function(err) {
        // Error :(
    });