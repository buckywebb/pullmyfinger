//TODO: code for data.next("https://freesound.org/apiv2/search/text/?&query=fart&weights=&page=2&fields=name,previews") to access page2+ for more audio files

document.querySelector('img').addEventListener('click', playFart)

function playFart() {
  //requires '&fields=previews' for API to return url for the audio files
  const url = "https://freesound.org/apiv2/search/text/?query=fart&fields=name,previews&token=eOmD46JdPybCmtrdid8ddhPHefiwBbiycFbakhIo"


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //there are 15 farts on each page[0-14]
      let fart = Math.floor(Math.random() * 15)
      console.log(data.results[fart].name)
      console.log(data.results[fart].previews['preview-hq-mp3'])
      document.getElementById("audio").src = data.results[fart].previews['preview-hq-mp3']
      audio.play()
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
