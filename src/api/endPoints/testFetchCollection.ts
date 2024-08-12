/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const fetchCollections = async (collectionName: string) => {
  const colRef = collection(db, collectionName);
  const querySnapshot = await getDocs(colRef);

  const documents: any[] | PromiseLike<any[]> = [];
  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });

  return documents;
};

export default fetchCollections;
