import Replicate from "replicate";

export default async function handler(req, res) {
  const replicate = new Replicate({
    auth: "r8_QQT2CumbsJWsy4HTcRJxKlNZEUhPDzU0Np9tOI",
  });

  const output = await replicate.run(
    "google/nano-banana-pro",
    {
      input: {
        prompt: "mulher elegante em ensaio fotográfico profissional, luz suave, fundo clean"
      }
    }
  );

  res.status(200).json(output);
}
