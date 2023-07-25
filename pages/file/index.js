import React ,{useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { setfiles, setfileupload } from "../../store/fileReducer";
import Modal from "react-modal";
import Nofile from "../../components/nofile";
import Navbar from "../../components/navbar";
import Image from "next/image";
import useRouter from "next/router";

const router = useRouter;

const FileComponent = () => {
  const files = useSelector((state) => state.file.files);
  const fileupload = useSelector((state) => state.file.fileupload);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleFileUpload = (event) => {
    const filesToUpload = Array.from(event.target.files);
    dispatch(setfileupload(filesToUpload));
  };

  const acceptFileTypes = [
    ".pdf",
    ".doc",
    ".docx",
    ".html",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/html",
  ];

  const handleredirect = () => {
    router.push("/");
  };

  const handleSubmit = () => {
    const validFiles = fileupload.filter(checkFileType);
    if (validFiles.length === 0) {
      setIsOpen(true)
      return;
    }
    dispatch(setfiles([...files, ...validFiles]));
    dispatch(setfileupload([]));
  };
  const checkFileType = (file) => {
    return acceptFileTypes.some((type) => {
      return (
        file.type === type ||
        file.name.toLowerCase().endsWith(type) ||
        file.name.toLowerCase().includes(type)
      );
    });
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#f5f5f5] ">
        <Navbar />
        <div className="text-right mr-5 mt-20 ">
          <div>
            <div onClick={handleredirect} className="btn bg-gray-100 hover:bg-gary-200">
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
          <div className="flex flex-col items-center sm:flex-row px-5">
            <div className="mr-auto">
              <div className="text-2xl text-center font-bold text-black">upload Files</div>
            </div>
            <div className="flex justify-between mt-5">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs bg-white"
                multiple
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.html,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/html"
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
                    <th className="text-base text-gray-500">Name</th>
                    <th className="text-center text-base text-gray-500">Size</th>
                  </tr>
                </thead>

                <tbody>
                  {files.length === 0 ? (
                    <Nofile />
                  ) : (
                    files.map((file, index) => (
                      <tr key={index}>
                        <td className="text-black">{file.name}</td>
                        <td className="text-center text-black">{file.size} bytes</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <div>
     
     <Modal
       isOpen={isOpen}
       onRequestClose={() => setIsOpen(false)}
       style={customStyles}
     >
       <h1>กรุณาเลือกไฟล์ใหม่ที่มีประเภทเป็น PDF, DOCX, หรือ HTML</h1>
       <button onClick={() => setIsOpen(false)} className="btn flex justify-center">ok</button>
     </Modal>


   </div>
    </div>
  );
};

export default FileComponent;
