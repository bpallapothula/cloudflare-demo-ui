export default {
  async fetch(request, env) {
    const cookie = request.headers.get("Cookie") || "";

    return new Response(`Cookie header: ${cookie}`);
  }
};