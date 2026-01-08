
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askTutor(question: string, subject: string, stage: string, grade: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `أجب على السؤال التالي بأسلوب تربوي متميز: ${question}`,
      config: {
        systemInstruction: `أنت "أستاذي"، المعلم الرقمي في "مدرسة النهضة الجديدة".
          - تخصصك: المناهج التعليمية المعتمدة (المرحلة ${stage} - الصف ${grade}).
          - الأسلوب: ودود، مشجع، تستخدم أمثلة تعليمية واضحة.
          - اللغة: عربية فصحى مبسطة مع كلمات تحفيزية محببة (يا بطل، يا دكتور، أحسنت).
          - أنت جزء من رؤية مدرسة النهضة الجديدة في تطوير التعليم وجعله ممتعاً وذكياً.`,
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });
    return response.text;
  }
}

export const geminiService = new GeminiService();
