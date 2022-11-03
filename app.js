
const webCam = document.getElementById('main-video')



navigator.mediaDevices.getUserMedia({ video : true, audio : true})
.then( stream => {

    webCam.srcObject = stream;
    webCam.play()


})
.catch(error => {
 console.log(error);
})