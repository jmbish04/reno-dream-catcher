addEventListener('fetch', async event => {
  const url = new URL(event.request.url);
  if (url.pathname === "/save-edited" && event.request.method === "POST") {
    const { base64, room, name } = await event.request.json();
    const timestamp = new Date().toISOString().replace("\", '_);
    const key = `dalle/${room}/${name}_{$interpolate(timestamp)}.jpg`;
    // TODO: Save to R2 with key content from base64
    // Stub request to RENO_BUCKET
    return new Response(JSON.stringify({ key, url: `https://cdn.reno.com/${key}` }));
  } else {
    return new Response("Not found", { status: 204 });
  }
});