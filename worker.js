export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cookie = request.headers.get("Cookie") || "";

    // Allow login page
    if (url.pathname === "/login.html") {
      return env.ASSETS.fetch(request);
    }

    // Redirect if not authenticated
    if (!cookie.includes("auth=true")) {
      return Response.redirect(`${url.origin}/login.html`, 302);
    }

    // Serve requested HTML/CSS/JS asset
    return env.ASSETS.fetch(request);
  }
};