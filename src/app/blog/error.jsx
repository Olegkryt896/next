"use client";

export default function ErrorWrapper({ error }) {
  return <h1>Ooops!!! {error.message}</h1>;
}
