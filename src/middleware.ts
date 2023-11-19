import { NextRequest, NextResponse } from "next/server";

let prod = process.env.NODE_ENV === "production";

export const config = {
  matcher: ["/csp/script-src/none", "/csp/script-src/self"],
};

const cspHeaderMap = {
  "/csp/script-src/none": () => `script-src 'none';`,
  "/csp/script-src/self": () =>
    `script-src 'self' ${prod ? "" : "'unsafe-eval'"};`,
} as Record<string, (nonce?: string) => string>;

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const nextPathName = request.nextUrl.pathname;

  const requestHeaders = new Headers(request.headers);

  let contentSecurityPolicyHeaderValue = '';

  if (nextPathName && cspHeaderMap[nextPathName]) {
    // Replace newline url and spaces
    contentSecurityPolicyHeaderValue = cspHeaderMap[nextPathName](nonce)
      .replace(/\s{2,}/g, " ")
      .trim();

    requestHeaders.set("x-nonce", nonce);

    requestHeaders.set(
      "Content-Security-Policy",
      contentSecurityPolicyHeaderValue
    );
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (!!contentSecurityPolicyHeaderValue) {
    response.headers.set(
      "Content-Security-Policy",
      contentSecurityPolicyHeaderValue
    );

    response.headers.set("x-nonce", nonce);
  }

  return response;
}
