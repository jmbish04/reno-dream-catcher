addEventListener('fetch', async event => {
  const url = new URL(event.request.url);
  if (url.pathname === "/save-edited" && event.request.method === "POST") {
    const { base64, room, name } = await event.request.json();
    const timestamp = new Date().toISOString().replace(/[/:.]/g, '_');
    const key = `dalle/${room}/${name}_timestamp.jpg`;
    const binary = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    await RENO_BUCKET.put(key, binary.buffer, {
      httpMetadata: { contentType: 'image/jpeg' }
    });
    return new Response(JSON.stringify({ key, url: `https://cdn.reno.com/${key}`}), {
      headers: { 'Content-Type': 'application/json'}
    });
  } else {
    return new Response("Not found", { status: 204 });
  }
});