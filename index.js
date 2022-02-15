// Copy paste to Cloudflare worker

const config = {
  base: "",
  /* Request url: EX: https://api.com/v9.4/ */
  key: "",
  /* Api Key */
  id: "",
  /* Api Id */
  orgin: ""
  /* Where you want your response to be visible */
}

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/html")) {
    return response.text()
  }
  else if (contentType.includes("text/html")) {
    return response.text()
  }
  else {
    return response.text()
  }
}

async function handleRequest(cli_url) {
  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": config["orgin"],
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  }
var data = cli_url.split("/")
var url 

  data.forEach(function(item, index, array) {
    if (item.includes("=") ){

    if (item.split("=")[0] === "mode") {
      url = config.base + "/" + item.split("=")[1] + "/?appID=" + config.id + "&apiKey=" + config.key
    } else {
      url = url + "&" + item.split("=")[0] + "=" + item.split("=")[1]
    }
  }
})

  console.log(data)
  const response = await fetch(url)
  const results = await gatherResponse(response)
  return new Response(results, init)
}

addEventListener("fetch", event => {
    //console.log(event.request.url)
    return event.respondWith(handleRequest(event.request.url))
})
