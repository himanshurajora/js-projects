
var myworker = new Worker("worker.js")


myworker.postMessage("hello 123")

myworker.onmessage = (e) => {
  console.log(e.data)
}

// myworker.terminate()