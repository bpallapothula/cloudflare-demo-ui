export default {
  async fetch(request) {
    const url = new URL(request.url);
    const cookie = request.headers.get("Cookie") || "";

    // Allow login page
    if (url.pathname === "/login.html") {
      return new Response("Login Page");
    }

    // Redirect if not authenticated
    if (!cookie.includes("auth=true")) {
      return Response.redirect(`${url.origin}/login.html`, 302);
    }

    return new Response("Authenticated User");
  }
};