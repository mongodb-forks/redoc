import * as React from 'react';
export interface EnumValuesProps {
    values: string[];
    isArrayType: boolean;
}
export interface EnumValuesState {
    collapsed: boolean;
}
export declare class EnumValues extends React.PureComponent<EnumValuesProps, EnumValuesState> {
    state: EnumValuesState;
    static contextType: React.Context<import("../../services/RedocNormalizedOptions").RedocNormalizedOptions>;
    private toggle;
    render(): JSX.Element | null;
}