/// <reference types="react" />
export interface CallbackTitleProps {
    name: string;
    opened?: boolean;
    httpVerb: string;
    deprecated?: boolean;
    className?: string;
    onClick?: () => void;
}
export declare const CallbackTitle: (props: CallbackTitleProps) => JSX.Element;
