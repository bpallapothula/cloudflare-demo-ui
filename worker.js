export default {
  async fetch(request) {
    const cookie = request.headers.get("Cookie") || "";

    if (!cookie.includes("auth=true")) {
      return Response.redirect(
        "https://cloudflare-demo-ui.bpallapothula.workers.dev/login.html",
        302
      );
    }

    return new Response("Authenticated!");
  }
};