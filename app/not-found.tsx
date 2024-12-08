import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Lost in the void of the internet.",
};

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - Page not found
      </h1>
      <p className="mb-4">
        Whoops! Looks like you wandered off the map. Maybe the page you're
        looking for is in Narnia?
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Let's go back home before Aslan gets upset.
      </a>
    </section>
  );
}
