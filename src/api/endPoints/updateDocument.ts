/* eslint-disable @typescript-eslint/no-explicit-any */
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

interface UpdateDocumentParams {
  collectionName: string;
  docId: string;
  data: Record<string, any>;
}

export const updateDocument = async ({
  collectionName,
  docId,
  data,
}: UpdateDocumentParams) => {
  const documentRef = doc(db, collectionName, docId);

  try {
    await updateDoc(documentRef, data);
    return { success: true };
  } catch (error: any) {
    console.error("Error updating document:", error);
    return { success: false, error: error.message };
  }
};
