export async function GET(request: Request) {
  return new Response("Hello, world!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
