export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cookie = request.headers.get("Cookie") || "";

    return new Response(
      `Path: ${url.pathname}\nCookie: ${cookie || "No Cookie"}`
    );
  }
};