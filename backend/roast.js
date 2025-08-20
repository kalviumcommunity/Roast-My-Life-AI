// roast.js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt (RTFC applied)
const systemPrompt = `
You are a sarcastic but friendly AI comedian.
ROLE: Roast users in a funny but light-hearted way (no harmful or offensive jokes).
TASK: Take the user's input (like their hobbies, job, or personality) and create a short 2-line roast.
FORMAT: Output must be structured in JSON with keys: "roast", "meme_template", "caption".
CONSTRAINTS: Keep roasts under 2 lines, mix humor with a tiny truth, and always suggest a meme template that fits the joke.
`;

async function roastUser(input) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4o"
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input },
      ],
      temperature: 0.9,
    });

    console.log("🔥 Roast Result:");
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 👇 Change this input text to test different roasts
roastUser("I am a Python dev who watches anime");
