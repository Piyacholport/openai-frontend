import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setfiles } from "../store/fileReducer";
import Nofile from "../components/nofile";
import Navbar from "../components/navbar";
import Image from "next/image";
import useRouter from "next/router";
const router = useRouter;

const FileComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const files = useSelector((state) => state.file.files);
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const filesToUpload = Array.from(event.target.files);
    setUploadedFiles(filesToUpload);
  };
  const handleredirect = () => {
    router.push("/");
  };

  const handleSubmit = () => {
    const validFiles = uploadedFiles.filter(checkFileType);
    if (validFiles.length === 0) {
      alert("กรุณาเลือกไฟล์ที่มีประเภทเป็น PDF, DOCX, หรือ HTML");
      return;
    }
    dispatch(setfiles([...files, ...validFiles]));
    setUploadedFiles([]);
  };
  const checkFileType = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/html",
    ];
    return allowedTypes.includes(file.type);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#f5f5f5] ">
        <Navbar />
        <div className="text-right mr-5 mt-20 ">
          <div>
            <div onClick={handleredirect} className="btn">
              <span>
                <Image
                  src="./icon/chatbubble.svg"
                  alt="trash"
                  width={20}
                  height={20}
                />
              </span>
              chat
            </div>
          </div>
        </div>

        <div className="mt-10 pb-20">
          <div class="flex flex-col items-center sm:flex-row px-5">
            <div class="mr-auto">
              <div className="text-2xl text-center font-bold">upload Files</div>
            </div>
            <div class="flex justify-between mt-5">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                multiple
                onChange={handleFileUpload}
              />
              <button className="btn btn-neutral ml-3" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>

          <div className="mt-5 mx-5 mx-auto bg-white rounded-md">
            <div className="relative">
              <table className="table rounded-md">
                <thead className="bg-gray-200 font-bold  ">
                  <tr>
                    <th className="text-base">Name</th>
                    <th className="text-center text-base">Size</th>
                  </tr>
                </thead>

                <tbody>
                  {files.length === 0 ? (
                    <Nofile />
                  ) : (
                    files.map((file, index) => (
                      <tr key={index}>
                        <td>{file.name}</td>
                        <td className="text-center">{file.size} bytes</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FileComponent;
