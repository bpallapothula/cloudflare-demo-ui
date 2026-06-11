export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Allow login page
  if (pathname === "/login.html") {
    return context.next();
  }

  const cookieHeader = context.request.headers.get("cookie") || "";
  const hasAccess = cookieHeader.includes("auth=true");

  if (!hasAccess) {
    return Response.redirect(`${url.origin}/login.html`, 302);
  }

  return context.next();
}