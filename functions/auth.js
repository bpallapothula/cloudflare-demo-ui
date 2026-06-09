export async function onRequest({ request, next }) {
  const cookie = request.headers.get("Cookie") || "";

  if (!cookie.includes("auth=true")) {
    const url = new URL(request.url);
    return Response.redirect(`${url.origin}/login.html`, 302);
  }

  return next();
}