// getDocumentById.ts
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

interface GetDocumentByIdParams {
  collectionName: string;
  docId: string;
}

export const getDocumentById = async ({
  collectionName,
  docId,
}: GetDocumentByIdParams) => {
  const documentRef = doc(db, collectionName, docId);

  try {
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return { id: documentSnapshot.id, ...documentSnapshot.data() };
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};
