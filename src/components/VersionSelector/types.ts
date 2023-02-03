export interface ActiveVersionData {
  resource_version: string;
  api_version: string;
}
export interface VersionSelectorProps {
  resource_versions: string[];
  active: ActiveVersionData;
  root_url: string;
  ariaLabel?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  dense?: boolean;
  fullWidth?: boolean;
  variant?: 'dark' | 'light';
  description?: string;
}

export interface ArrowIconProps {
  open: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  style?: React.CSSProperties;
}
