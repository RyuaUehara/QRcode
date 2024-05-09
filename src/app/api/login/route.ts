import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (req: Request, res: NextResponse) => {
  const customers = await prisma.post.findMany({
    orderBy: { customerID: "desc" },
  });
  return NextResponse.json({ message: "Success", customers }, { status: 200 });
};