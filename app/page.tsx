import Image from "next/image";

export default function Home() {
  return (
    <main className="container m-auto">
      <h1>Thinley Norbu</h1>
      <p>Senior Frontend / Full-Stack Engineer building multi-tenant systems with real infrastructure experience on AWS.</p>

      <ul className="mt-5">
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="https://github.com/ThinleyN" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </main>
  );
}
