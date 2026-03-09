
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual experto de "Servitekno", una empresa líder especialista en la fabricación e instalación de centros de lavado de coches en autoservicio.
Tu objetivo es ayudar a potenciales inversores y dueños de negocios a entender por qué Servitekno es la mejor opción en el mercado.

Características clave de nuestros centros:
- Eficiencia energética y de agua (especialistas en sostenibilidad).
- Control remoto vía App IoT avanzada.
- Programas de lavado: Pre-lavado, Jabón, Cepillo, Aclarado, Cera, Abrillantado (Osmosis).
- Rentabilidad estimada: ROI en 18-24 meses.

Debes ser profesional, amable y persuasivo. Si preguntan por precios, menciona que varían según la personalización pero comienzan desde 28.500€.
Trata de guiar al usuario hacia agendar una llamada con un comercial de Servitekno.
Responde siempre en español.
`;

export const getChatResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, he tenido un problema técnico. ¿Podrías repetirme tu consulta o contactarnos por teléfono?";
  }
};
