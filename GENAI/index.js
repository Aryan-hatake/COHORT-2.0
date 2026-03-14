import 'dotenv/config'
import readline from 'readline/promises'
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {HumanMessage } from "langchain"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
 
const model = new ChatGoogleGenerativeAI({
    model:"gemini-2.5-flash-lite",
    apiKey:process.env.GEMINI_API_KEY
})

const message = [];

while(true){
    const userInput = await rl.question("You: ")
    message.push(new HumanMessage(userInput))
    const response = await model.invoke(message)
    message.push(response)

    console.log(message)
    console.log("AI: "+response.content)
}

