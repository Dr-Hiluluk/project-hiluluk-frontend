import { useCallback, useState } from "react";
import { uploadImage } from "../api/files";

export const useCFUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const upload = useCallback(
    async (file: File, info: { type: string; refId: number }) => {
      try {
        const data = await uploadImage(file, info);
        setImage(data);
        return data;
      } catch (e: any) {
        setError(e);
        console.error(e);
      }
    },
    [],
  );

  return [upload, image] as [typeof upload, typeof image];
};
