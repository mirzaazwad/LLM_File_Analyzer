import ErrorDisplay from "../../../components/reusables/ErrorDisplay";
import { useJSON } from "../hooks/useJSON";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JSONResponseViewer = ({ className }: { className?: string }) => {
  const [json, error] = useJSON();

  return (
    <div className={className}>
      {json && (
        <SyntaxHighlighter language="json" style={coy}>
        {json}
      </SyntaxHighlighter>
      )}
      <ErrorDisplay
        isError={error !== "" && error !== undefined}
        error={error}
      />
    </div>
  );
};

export default JSONResponseViewer;
