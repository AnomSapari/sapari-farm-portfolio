import { useEffect, useState } from "react";
import { CatatanTernak } from "../types/catatan";
import { getCatatan, saveCatatan } from "../services/catatanService";

export const useCatatan = () => {
  const [catatan, setCatatan] = useState<CatatanTernak[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCatatan().then((data) => {
      setCatatan(data);
      setLoading(false);
    });
  }, []);

  const tambahCatatan = async (data: CatatanTernak) => {
    setCatatan((prev) => [data, ...prev]);
    await saveCatatan(data);
  };

  return { catatan, loading, tambahCatatan };
};
