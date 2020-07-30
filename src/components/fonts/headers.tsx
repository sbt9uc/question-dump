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

export const Display1 = styled(BaseFont)`
font-family: 'Georgia';
font-weight: ${ props => props.boldness || 400 };
font-size: 32px;
line-height: 40px;
`

export const Display2 = styled(BaseFont)`
font-family: 'Georgia';
font-weight: ${ props => props.boldness || 400 };
font-size: 28px;
line-height: 36px;
`

export const Display3 = styled(BaseFont)`
font-family: 'Georgia';
font-weight: ${ props => props.boldness || 400 };
font-size: 24px;
line-height: 32px;
`

export const Display4 = styled(BaseFont)`
font-family: 'Georgia';
font-weight: ${ props => props.boldness || 400 };
font-size: 20px;
line-height: 28px;
`