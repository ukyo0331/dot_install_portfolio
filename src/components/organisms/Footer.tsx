import { memo, FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = memo(() => {
    return (
        <SFooter>
            <small>(C) dotinstall.com</small>
        </SFooter>
    )
})

const SFooter = styled.footer`
    padding: 60px;
    margin: 0 auto;
    color: #aaa 
`
