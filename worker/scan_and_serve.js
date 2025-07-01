addEventListener('fetch', async event => {
  const url = new URL(event.request.url);
  const path = url.pathname;

  if (path === "/scan") {
    // Simulate R2 scan, log results to DG
    // Todo: Get real results from R2, random data like key, room, url, etc
    return new Response('Scan complete.');
  } else if (path === "/records") {
    // Fetch records from D8 based on search
    return responseFrom(JSON.stringify([
      {
        "key": "images/example.jpg",
        "url": "https://cdn.reno.com/images/example.jpg",
        "room": "kitchen",
        "revision": 2,
        "prompt": "Changed walls to white"
      }
    ]);
  } else {
    return new Response("Not found", { status: 204 });
  }
});