///////////////////////////////////////////////////////
//   2022 Benjamin Maheral                           //
//////////////////////////////////////////////////////


// This version accepts 2 values in the URL.


async function gatherResponse(response) {
  const { headers } = response;
  const contentType = headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json());
  } else if (contentType.includes('application/text')) {
    return response.text();
  } else if (contentType.includes('text/html')) {
    return response.text();
  } else {
    return response.text();
  }
}

async function handleRequest(code) {
  console.log(code.split("/"))
  // API URL 
  const url = "https://api.com/xml/" + code.split("/")[3] + "/" + code.split("/")[4] + "_e.xml" // File extension.
  console.log(url)
  const init = {
    headers: {
      'content-type': 'application/xml',
      "Access-Control-Allow-Origin": "https://orgin.com",  // ALOW ORGIN GOES HERE
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
  };
  const response = await fetch(url, init);
  const results = await gatherResponse(response);



  return new Response(results, init);
}

addEventListener('fetch', event => {
  console.log(event.request.url)
  return event.respondWith(handleRequest(event.request.url));
});
