import React from 'react'
import styled from "styled-components"
import { BoldnessLevels } from "../../types/question-types"
import { IDefaultProps } from '../../types/default-props'


interface IFontProps extends IDefaultProps {
    /**
     * [optional] font weight 
     */
    boldness?: BoldnessLevels;
    /**
     * [optional] which type of tag the font will be applied to
     * Default is div
     */
    tag?: 'a' | 'div' | 'p' | 'span' | 'input' | 'textarea' | 'text';
    /**
     * [optional] set of custom props to sent to styled components
     */
    customProps?: any
}

const BaseFont: React.FunctionComponent<IFontProps> = ( {boldness, children, tag, ...props}: IFontProps) => {
    const tagType = typeof tag === 'string' ? tag : 'div';
    const factory = React.createFactory(tagType);
    return factory(props, children);
}

export const Body12 = styled(BaseFont)`
font-family: 'Work Sans';
font-weight: ${ props => props.boldness || 400 };
font-size: 12px;
line-height: 16px;
`

export const Body14 = styled(BaseFont)`
font-family: 'Work Sans';
font-weight: ${ props => props.boldness || 400 };
font-size: 14px;
line-height: 18px;
`

export const Body16 = styled(BaseFont)`
font-family: 'Work Sans';
font-weight: ${ props => props.boldness || 400 };
font-size: 16px;
line-height: 20px;
`