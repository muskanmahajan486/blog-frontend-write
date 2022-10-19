const postPost = async (
  title: string,
  content: string,
  published: boolean,
  bearerToken: string
) => {
  const postDetails = { title, content, published: published.toString() };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: bearerToken,
    },
    body: new URLSearchParams(postDetails),
  };
  try {
    const response = await fetch(`http://localhost:3000/posts/create`, options);
    if (!response.ok) throw new Error(`${await response.text()}`);
    return await response.text();
  } catch (err) {
    if (err instanceof Error) return err;
    return new Error("Unknown error");
  }
};

export default postPost;