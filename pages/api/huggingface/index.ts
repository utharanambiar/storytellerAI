import { HfInference } from "@huggingface/inference";

const HF_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_KEY;

const inference = new HfInference(HF_ACCESS_TOKEN);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  const { text } = req.body;

  let out = "";

  const stream = inference.chatCompletionStream({
    model: "Qwen/Qwen2.5-72B-Instruct",
    messages: [{ role: "user", content: text }],
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 0.7,
  });

  for await (const chunk of stream) {
    if (chunk.choices && chunk.choices.length > 0) {
      const newContent = chunk.choices[0].delta.content;
      out += newContent;
    }
  }

  res.status(200).json({
    translation_text: out,
  });
}
