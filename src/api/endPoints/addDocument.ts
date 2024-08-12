/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

interface AddDocumentParams {
  collectionName: string;
  data: Record<string, any>;
}

export const addDocument = async ({
  collectionName,
  data,
}: AddDocumentParams) => {
  const collectionRef = collection(db, collectionName);

  try {
    const docRef = await addDoc(collectionRef, data);
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Error adding document:", error);
    return { success: false, error: error.message };
  }
};
