export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Allow login page
    if (url.pathname === '/login.html') {
      return env.ASSETS.fetch(request);
    }

    const cookie = request.headers.get('Cookie') || '';

    if (!cookie.includes('authToken=')) {
      return Response.redirect(`${url.origin}/login.html`, 302);
    }

    return env.ASSETS.fetch(request);
  }
};