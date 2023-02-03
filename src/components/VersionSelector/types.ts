export interface ActiveVersionData {
  resource_version: string;
  api_version: string;
}
export interface VersionSelectorProps {
  resource_versions: string[];
  active: ActiveVersionData;
  root_url: string;
  description?: string;
  variant?: 'dark' | 'light'; // Not fully implemented
  ariaLabel?: string;
  className?: string;
  placeholder?: string;
  value?: string;
}

export interface ArrowIconProps {
  open: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  style?: React.CSSProperties;
}
