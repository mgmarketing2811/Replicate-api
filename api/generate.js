import Replicate from "replicate";

export default async function handler(req, res) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(
    "google/nano-banana-pro",
    {
      input: {
        prompt: req.body.prompt
      }
    }
  );

  res.status(200).json(output);
