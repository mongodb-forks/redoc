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
}

export interface OptionProps {
  option: string;
  selected: boolean;
  onClick: () => void;
}

export interface ArrowIconProps {
  open: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  style?: React.CSSProperties;
}
