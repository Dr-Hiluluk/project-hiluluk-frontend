import axios from "axios";

export const createSignedUrl = (info: {
  type: string;
  filename: string;
  refId: number;
}) => {
  return axios.post("api/file/create-url", info);
};

export const uploadImage = async (
  file: File,
  info: { type: string; refId: number },
) => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("type", info.type);
  if (info.refId) {
    formData.append("refId", info.refId.toString());
  }
  const response = await axios.post("api/file/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
