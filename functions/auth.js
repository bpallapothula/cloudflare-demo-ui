export async function onRequest({ request, next }) {
  const cookie = request.headers.get("Cookie") || "";
  const loggedIn = cookie.includes("auth=true");

  if (!loggedIn) {
    return Response.redirect("/login.html", 302);
  }

  return next();
}