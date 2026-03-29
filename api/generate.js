import Replicate from "replicate";

export default async function handler(req, res) {
  const replicate = new Replicate({
    auth: auth: "r8_QQT2CumbsJWsy4HTcRJxKlNZEUhPDzU0Np9tOI",,
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
}
