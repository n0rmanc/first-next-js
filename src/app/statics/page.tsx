async function getData() {
  return {
    name: "John Doe",
  };
}

export default async function Page() {
  const resp = await fetch("https://api.ipify.org?format=json", {
    cache: "default",
  });
  const ip = await resp.text();
  return (
    <div>
      <h1>{ip}</h1>
    </div>
  );
}
