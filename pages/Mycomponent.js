import React, { useState } from "react";
import { checkFileType } from "./fileUtils"; // แก้ไขเส้นทางไปยังไฟล์ fileUtils.js

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const isValidFile = checkFileType(file);
      if (!isValidFile) {
        alert("กรุณาเลือกไฟล์ที่เป็น pdf, docx หรือ html เท่านั้น");
        setSelectedFile(null);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default MyComponent;
