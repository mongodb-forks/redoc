export interface VersionOption {
  idx?: number;
  value: string;
  title?: string;
  serverUrl?: string;
  label?: string;
}

export interface VersionSelectorProps {
  options: string[];
  onChange?: (option: VersionOption) => void;
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
