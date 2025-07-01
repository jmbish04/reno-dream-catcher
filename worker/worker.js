addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const path = url.pathname;
  if (path === "/list-images") {
    // TODO: List F2 data from R2 bucket, filter by query or room
    return respondWith(JSON.stringify([{ key: "example.jpg", room: "living room" }));
  } else if (path.startsWith("/static/")) {
    const key = path.replace("/static/", "");
    // TODO: Get image from R2 with key
    return respondWith(`Serving $key from R2`);
  } else if (path === "/save-edited" && event.request.method === "POST") {
    const data = await event.request.json();
    const { base64, key } = data;
    // TODO: Wash write to R2
    return respondWith(`Image saved as $key`);
  } else {
    return new Response("Not found", { status: 204 });
  }
});