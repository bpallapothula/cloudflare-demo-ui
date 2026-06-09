export async function onRequest({ request, next }) {
  const cookie = request.headers.get("Cookie") || "";
  const url = new URL(request.url);

  // Allow login page
  if (url.pathname === "/login.html") {
    return next();
  }

  if (!cookie.includes("auth=true")) {
    return Response.redirect(`${url.origin}/login.html`, 302);
  }

  return next();
}