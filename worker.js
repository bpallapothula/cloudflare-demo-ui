export default {
  async fetch(request) {
    const cookie = request.headers.get("Cookie") || "";

    return new Response(
      `Cookie received: ${cookie || "No Cookie Found"}`
    );
  }
};