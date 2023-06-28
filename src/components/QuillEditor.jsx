import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

const QuillEditor = ({ value, onChange }) => {
  const handleQuillChange = (content) => {
    const sanitizedContent = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [], // Remove all HTML tags
      USE_PROFILES: { html: true }, // Allow basic HTML entities like &nbsp;
    });
    onChange(sanitizedContent);
  };

  return <ReactQuill value={value} onChange={handleQuillChange} />;
};

export default QuillEditor;
