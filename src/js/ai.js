import {InferenceClient } from "@huggingface/inference"


const hf = new InferenceClient("YOUR_TOKEN")
const SYSTEM_PROMPT = `You are an assistant thath receives a list of ingreients. The recipe can include additional ingredients, try not to include too many extra ingredients. Format you response in markdown to make it easier to render a web page. make recipe in 5 sentences `


export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        {role: "system", content: SYSTEM_PROMPT},
        {role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make! `},
      ],
      max_tokens: 1024,
    })
    return response.choices[0].message.content
  } catch (err) {
    console.error(err.message)
  }

}
