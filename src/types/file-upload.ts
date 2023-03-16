export interface FileUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  showUploadButton: boolean;
}
