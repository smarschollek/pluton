export default function Index() {
  return (
    <div
      className="place-items-center grid h-screen bg-gradient-to-t to-black from-purple-900"
    >
      <div
        className="bg-white bg-opacity-20 p-4 rounded shadow-2xl text-white"
      >
        <h1
          className="text-3xl font-bold underline mb-5"
        >
          Welcome to Remix 13
        </h1>
        <ul>
          <li>
            <a
              className="hover:text-green-500"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              target="_blank"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-500"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              target="_blank"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-500"
              href="https://remix.run/docs"
              rel="noreferrer"
              target="_blank"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
