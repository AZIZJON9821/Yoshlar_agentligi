import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }


  try {
    const { id } = req.query;
    const url = id
      ? `https://api.it-mahalla.uz/categories/${id}`
      : "https://api.it-mahalla.uz/categories";


    const response = await axios.get(url, {
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("API Error:", error);
    // Return fallback data if external API fails
    res.status(200).json({
      data: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "Python" },
        { id: 3, name: "Java" },
        { id: 4, name: "C++" },
        { id: 5, name: "TypeScript" },
        { id: 6, name: "React" },
        { id: 7, name: "Node.js" },
        { id: 8, name: "PHP" },
        { id: 9, name: "Ruby" },
        { id: 10, name: "Go" },
      ],
    });
  }
}
