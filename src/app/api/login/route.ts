import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
    console.log("DB connected");
  } catch (err) {
    return Error("DB connection error");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
  } catch (error) {}
};
