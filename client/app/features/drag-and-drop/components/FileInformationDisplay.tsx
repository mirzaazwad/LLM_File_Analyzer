import { Message } from "rsuite";
import { useFile } from "../hooks/useFile";

const FileInformationDisplay = () => {
  const { show, fileInformation } = useFile();

  if (!show) {
    return <></>;
  }

  return (
    <Message type="success">
        {fileInformation}
    </Message>
  );
};

export default FileInformationDisplay;
