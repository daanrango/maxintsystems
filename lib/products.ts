import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category?: string;
  price?: number;
  featured?: boolean;
  active?: boolean;
  order?: number;
};

export async function getProducts(): Promise<Product[]> {
  const q = query(
    collection(db, "products"),
    where("active", "==", true),
    orderBy("order", "asc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
}
