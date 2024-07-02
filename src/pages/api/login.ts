import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const user = await prisma.pessoa.findUnique({
        where: {
          email,
        },
      });

      if (user && user.password === password) {
        res
          .status(200)
          .json({ success: true, message: "Login sucessful!", user, idSession: uuidv4() });
      } else {
        res.status(401).json({ success: false, message: "A error ocurred!" });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
