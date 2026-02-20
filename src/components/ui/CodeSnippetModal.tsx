import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Modal } from './Modal';
import './CodeSnippetModal.css';

interface CodeSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  language?: string;
}

export function CodeSnippetModal({
  isOpen,
  onClose,
  title,
  code,
  language = 'tsx',
}: CodeSnippetModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} contentClassName="modal-content--wide">
      <div className="code-snippet-modal-body">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers
          customStyle={{ margin: 0 }}
          codeTagProps={{ style: { fontFamily: 'var(--font-mono, monospace)' } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </Modal>
  );
}
