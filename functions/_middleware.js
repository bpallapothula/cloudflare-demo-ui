export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;


  if (pathname === "/" || pathname === "/index.html" || pathname === "/404.html") {
    return context.next();
  }

  // Check for the cookie
  const cookieHeader = context.request.headers.get("cookie") || "";
  const hasAccess = cookieHeader.includes("wrangler pages deploy public --project-name my-poc");

  if (!hasAccess) {

    const notFoundPage = await context.env.ASSETS.fetch(
      new URL("/404.html", context.request.url)
    );

    return new Response(notFoundPage.body, {
      status: 404,
      headers: { "Content-Type": "text/html" },
    });
  }

  return context.next();
}