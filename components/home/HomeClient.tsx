"use client";

import { useMemo } from "react";
import { decrement, increment, reset } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetPostsQuery } from "@/lib/services/baseApi";

const buttonStyle: React.CSSProperties = {
  borderRadius: "9999px",
  border: "none",
  padding: "0.5rem 1.25rem",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#38bdf8",
  color: "#0f172a",
  fontWeight: 600
};

export function HomeClient() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  const headline = useMemo(() => {
    if (isError) return "Unable to load posts right now.";
    if (isLoading) return "Loading example posts...";
    return "Latest placeholder posts";
  }, [isError, isLoading]);

  return (
    <section
      style={{
        display: "grid",
        gap: "2rem",
        justifyItems: "center",
        maxWidth: "720px",
        width: "100%"
      }}
    >
      <header style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.5rem" }}>
          Next.js + Redux Toolkit Scaffold
        </h1>
        <p style={{ opacity: 0.85 }}>
          This starter uses Redux Toolkit for state management and RTK Query for data fetching.
        </p>
      </header>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center"
        }}
      >
        <button style={buttonStyle} onClick={() => dispatch(decrement())}>
          –
        </button>
        <span style={{ fontSize: "2rem", minWidth: "4ch", textAlign: "center" }}>{value}</span>
        <button style={buttonStyle} onClick={() => dispatch(increment())}>
          +
        </button>
        <button style={{ ...buttonStyle, backgroundColor: "#fbbf24" }} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>

      <article
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          borderRadius: "1rem",
          padding: "1.5rem",
          width: "100%"
        }}
      >
        <h2 style={{ marginTop: 0 }}>{headline}</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
          {posts?.map((post) => (
            <li key={post.id} style={{ backgroundColor: "rgba(15, 23, 42, 0.6)", padding: "1rem", borderRadius: "0.75rem" }}>
              <h3 style={{ marginTop: 0 }}>{post.title}</h3>
              <p style={{ marginBottom: 0, opacity: 0.85 }}>{post.body}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
