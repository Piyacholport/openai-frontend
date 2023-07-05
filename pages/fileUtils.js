// fileUtils.js
import mime from 'mime';

export function checkFileType(file) {
  const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/html'];
  const fileType = mime.getType(file.name);

  if (allowedTypes.includes(fileType)) {
    return true;
  } else {
    return false;
  }
}
