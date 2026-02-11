import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import { CatatanTernak } from "../types/catatan";

const colRef = collection(db, "catatan_ternak");

export const saveCatatan = async (data: CatatanTernak) => {
  await addDoc(colRef, data);
};

export const getCatatan = async (): Promise<CatatanTernak[]> => {
  const q = query(colRef, orderBy("tanggal", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => doc.data() as CatatanTernak);
};
