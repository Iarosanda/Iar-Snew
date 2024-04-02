const axios=require('axios');

const apiEndpoint='https://sandipapi.onrender.com/gpt';

module.exports={config:{name:"ai",version:1.0,author:"coffee",longDescription:"AI",category:"ai",guide:{en:"{p}questions"}},onStart:async()=>{},onChat:async({event,message})=>{try{const{body}=event;if(!(body&&body.toLowerCase().startsWith("ai")))return;const prompt=body.substring(2).trim();if(!prompt)return await message.reply("💫IARO SANDA💫 \n━━━━━━━━━━━━━━━\n Hello👋, how can i help you!☺️\n━━━━━━━━━━━━━━━");const response=await axios.get(`${apiEndpoint}?prompt=${encodeURIComponent(prompt)}`);if(response.status===200)await message.reply(`Ade_Anu ✨\n━━━━━━━━━━━━━━━ here is your answer..; \n${response.data.answer}\n━━━━━━━━━━━━━━━`);else throw new Error(`Failed to fetch data. Status: ${response.status}`);}catch(error){console.error("Error:",error.message);}}};
