import { memo, FC } from 'react';
import styled from 'styled-components'

type Props = {
    src: string;
    alt: string;
    width: string;
    height: string;
}


export const UserIcon: FC<Props> = memo((props) => {
    const {src, alt, width, height} = props;
    
    return (
        <>
            <SImg 
                src={src} 
                alt={alt}
                width={width}
                height={height}
            />
        </>
    )
})

const SImg = styled.img`
    border-radius: 50%
`