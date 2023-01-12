import { memo, FC } from 'react';

type Props = {
    src: string;
    alt: string;
}


export const LinkIcon: FC<Props> = memo((props) => {
    const {src, alt} = props;
    
    return (
        <>
            <img 
                src={src} 
                alt={alt}
                width='20'
                height='20'
            />
        </>
    )
})