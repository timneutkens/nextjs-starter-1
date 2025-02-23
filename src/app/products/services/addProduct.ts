import { Products } from "@/app/products/schema";

export async function insertProduct(data: Products) {
  try {
    const response = await fetch(`/api/products/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
