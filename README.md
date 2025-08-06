# Roast-My-Life-AI

### **🔥 Project: "Roast My Life" AI**  
*A viral chatbot that humorously roasts users based on their input (e.g., their job, hobbies, or dating profile) and generates a custom meme/SVG to shame them (in good fun).*  

#### **Why It’s Irresistible**:  
- **Mass Appeal**: Roast culture is huge (see "Reddit Roast Me," Twitter dunk threads).  
- **Personalization**: Users willingly give data to get a custom joke.  
- **Shareability**: Meme output = free marketing.  

---

### **How It Covers Each Topic**  

#### 1. **Prompting**  
- **System Prompt**:  
  ```  
  "You are a sarcastic but friendly AI. Roast the user's input (e.g., 'I’m a Python dev who loves anime') in 2 lines max. Mix humor with a tiny truth. Then suggest a meme template (e.g., 'Woman Yelling at Cat')."  
  ```  
- **User Input Examples**:  
  - *"Roast my LinkedIn profile."*  
  - *"I’m a gym bro who hates cardio—destroy me."*  

#### 2. **RAG (Retrieval-Augmented Generation)**  
- **Dataset**: Scrape roasts from Reddit/YouTube/Twitter or use a pre-made "roast bank" (e.g., `{ "target": "programmers", "roasts": ["'Debugging skills: 10/10. Social skills: -∞'"] }`).  
- **Augment Responses**: Pull relatable roasts from the DB (e.g., if user says *"I’m a startup founder,"* retrieve *"'Your CAC is higher than your self-esteem.'"*).  

#### 3. **Structured Output**  
- **JSON Response**:  
  ```json
  {
    "roast": "You call this a 'side hustle'? Your Etsy store has 3 sales and 2 are your mom.",
    "meme_template": "Drake Hotline Bling",
    "caption": "9-to-5 job | Your 'passion project'"
  }
  ```  

#### 4. **Function Calling**  
- **Dynamic Actions**:  
  - Call **Meme API** (e.g., ImgFlip) to generate the roast meme.  
  - Fetch **trending topics** (e.g., Twitter) to tie roasts to current events (*"Your coding skills vs. ChatGPT’s"*).  
  - Log user inputs (anonymized) to improve roast material.  

---

### **Tech Stack**  
- **Backend**: Python + FastAPI (or Next.js API routes).  
- **RAG**: Supabase/Pinecone for roast embeddings + retrieval.  
- **APIs**: ImgFlip/Kapwing (memes), Twitter/Reddit (trends).  
- **Frontend**:  
  - **Web**: Next.js + Tailwind (share buttons, meme editor).  
  - **Discord/Telegram Bot**: For virality in communities.  

---

### **Monetization & Growth Hooks**  
- **"Premium Roasts"**: Pay to use celebrity voice clones (ElevenLabs API) or video roasts.  
- **Leaderboards**: *"Most Roasted User of the Week"* (encourages repeats).  
- **UGC**: Let users submit roasts to the DB (crowdsourced humor).  

---

### **Spin-Off Ideas**  
- **"Roast My Code"**: For devs (integrates with GitHub).  
- **"Tinder Roast Bot"**: Upload a dating profile pic → AI generates a savage bio.  
- **"Corporate BS Generator"**: Roasts startup buzzwords (*"We’re 'disrupting' napkin folding."*).  

**Why This Works**:  
✅ **Zero friction**: Users type 1 line → get instant comedy.  
✅ **Viral hooks**: Memes are inherently shareable.  
✅ **Teaches advanced AI**: You implement all 4 topics in a real product.  
