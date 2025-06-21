// src/store/ChatAI.js
import { create } from "zustand";

const ChatAI = create((set) => ({
  selectedAI: null, // yahan AI model ka naam save hoga agar multiple models ho
  questionList: [], // saare sawal aur jawab yahan array mein save honge

  // AI model ko select karne ka function
  setSelectedAI: (selectedAI) => set({ selectedAI }),

  // Chat mein naye sawal aur jawab ko list mein add karne ka function
  setQuestion: (newQuestion) =>
    set((state) => ({
      questionList: [...state.questionList, newQuestion], // purane + naya question add hoga
    })),

    //sara message list replace karne ka lie [API]
    setQuestion:(messageArray)=>
        set(()=>({
questionList:messageArray
        })),

  // Purani chat clear karne ka function
  clearQuestions: () => set({ questionList: [] }),
}));

export default ChatAI;