import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const allProduct = await db.select().from(products);
  return NextResponse.json(allProduct);
}
