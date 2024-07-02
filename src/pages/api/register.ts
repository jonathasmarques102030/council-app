import { PrismaClient } from '@prisma/client';
import { NextApiResponse, NextApiRequest } from 'next'
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    try {
      const user = await prisma.pessoa.create({
        data: {
          name,
          email,
          password,
        },
      });
      res.status(200).json({ success: true, user });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}