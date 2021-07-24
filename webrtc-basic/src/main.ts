const streamConstraints : MediaStreamConstraints = {"video" : {height: 200, width: 300}, "audio" : false}

async function getLocalStream(){
    return await navigator.mediaDevices.getUserMedia(streamConstraints)
}


var video1 : HTMLVideoElement  = document.getElementById("video1") as HTMLVideoElement
var video2 : HTMLVideoElement = document.getElementById("video2") as HTMLVideoElement
var btn = document.getElementById("btn")
var pc1 : RTCPeerConnection, pc2 : RTCPeerConnection
var stream : MediaStream


btn?.addEventListener("click", () => {
    setup()
})






async function setup(){
    stream = await getLocalStream()
    video1.srcObject = stream
    pc1 = new RTCPeerConnection({"iceServers": [{"urls" : "stun:stun.l.google.com:19302"}]})
    stream.getTracks().forEach((track)=>{pc1.addTrack(track)})
    const offer = await pc1.createOffer()
    await pc1.setLocalDescription(offer)
    pc1.onicecandidate = async (ev) => {await pc2.addIceCandidate(ev.candidate)}
    console.log(pc1);
    
    pc2 = new RTCPeerConnection({})
    pc2.onicecandidate = async (e) => {
        await pc1.addIceCandidate(e.candidate)
    }
    
    pc2.addEventListener("track", (e) => {
        console.log("has tracks", e)
        var remotestream : MediaStream = new MediaStream();
        remotestream.addTrack(e.receiver.track)
        console.log(remotestream);
        console.log(stream)
        video2.srcObject = remotestream;
    })
    await pc2.setRemoteDescription(offer) 
    const answer = await pc2.createAnswer()
    await pc2.setLocalDescription(answer)
    await pc1.setRemoteDescription(answer)
    
    console.log(pc2)    
}