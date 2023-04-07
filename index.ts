import fetch from "node-fetch";

export {
  requestLyricsFor,
  requestIconFor,
  requestAuthorFor,
  requestTitleFor,
};

async function requestLyricsFor(title: string): Promise<string> {
  if (!title) throw new TypeError("Input value was undefined!");
  try {
    const response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`);
    const data = await response.json();
    return data.lyrics;
  } catch (error) {
    throw new Error("Failed to fetch lyrics");
  }
};

async function requestIconFor(title: string): Promise<string> {
  if (!title) throw new TypeError("Input value was undefined!");
  try {
    const response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`);
    const data = await response.json();
    return data.thumbnail.genius;
  } catch (error) {
    throw new Error("Failed to fetch icon");
  }
};

async function requestAuthorFor(title: string): Promise<string> {
  if (!title) throw new TypeError("Input value was undefined!");
  try {
    const response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`);
    const data = await response.json();
    return data.author;
  } catch (error) {
    throw new Error("Failed to fetch author");
  }
};

async function requestTitleFor(title: string): Promise<string> {
  if (!title) throw new TypeError("Input value was undefined!");
  try {
    const response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`);
    const data = await response.json();
    return data.title;
  } catch (error) {
    throw new Error("Failed to fetch title");
  }
};
