import { Message } from "rsuite";
import { useFile } from "../hooks/useFile";

const FileInformationDisplay = () => {
  const { show, filename, size, fileMetric } = useFile();

  if (!show) {
    return <></>;
  }

  return (
    <Message type="success">
        {filename} {` ${size} ${fileMetric}`}
    </Message>
  );
};

export default FileInformationDisplay;
