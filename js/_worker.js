export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Allow login page
    if (url.pathname === "/login.html") {
      return fetch(request);
    }

    const cookie = request.headers.get("Cookie") || "";

    if (!cookie.includes("auth=true")) {
      return Response.redirect(`${url.origin}/login.html`, 302);
    }

    return fetch(request);
  }
};