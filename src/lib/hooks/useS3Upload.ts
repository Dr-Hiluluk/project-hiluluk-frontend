import axios from "axios";
import { useCallback, useState } from "react";
import { createSignedUrl } from "../api/files";

const useS3Upload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const s3Upload = useCallback(
    async (file: File, info: { type: string; refId: number }) => {
      if (file.size > 1024 * 1024 * 15) {
        const e = new Error("파일이 너무 큽니다.");
        e.name = "FileToBig";
        throw e;
      }
      if (!file.type.includes("image/")) {
        const e = new Error("이미지 파일이 아닙니다.");
        e.name = "NotAnImage";
        throw e;
      }

      try {
        const response = await createSignedUrl({
          ...info,
          filename: file.name,
        });

        const { imagePath, signedUrl } = response.data;
        await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        setImage(imagePath);
        return imagePath;
      } catch (e: any) {
        setError(e);
        console.error(e);
      }
    },
    [],
  );

  return [s3Upload, image, error] as [
    typeof s3Upload,
    typeof image,
    typeof error,
  ];
};

export default useS3Upload;
