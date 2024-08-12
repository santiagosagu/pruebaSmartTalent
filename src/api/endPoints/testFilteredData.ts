/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

type Filter = [string, "==" | ">" | "<" | ">=" | "<=", any];

const fetchFilteredData = async (collectionName: string, filters: Filter[]) => {
  const ref = collection(db, collectionName);

  let q = query(ref);

  filters.forEach(([field, operator, value]: Filter) => {
    q = query(q, where(field, operator, value));
  });

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export default fetchFilteredData;
