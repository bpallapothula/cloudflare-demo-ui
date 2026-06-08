export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Allow login page
  if (url.pathname === "/login.html") {
    return context.next();
  }

  const cookie = context.request.headers.get("Cookie") || "";

  if (!cookie.includes("authToken=")) {
    return Response.redirect(`${url.origin}/login.html`, 302);
  }

  return context.next();
}