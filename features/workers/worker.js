onmessage = (e) => {
  console.log(e.data)
  for (let index = 0; index < 999999999; index++) {
    // some heavy work
  }

  postMessage("work done")
}