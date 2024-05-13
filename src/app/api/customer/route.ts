import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (req: Request, res: NextResponse) => {
    const customers = await prisma.customer.findMany();
    return NextResponse.json(customers);
}