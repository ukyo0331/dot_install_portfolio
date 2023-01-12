import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children: ReactNode;
}

export const Main: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <main>
                <SContainer>
                    <SH1>WORKS</SH1>
                    {children}
                </SContainer>
            </main>
        </>
    )
})

const SContainer = styled.div`
    width: 400px;
    margin: 0 auto;
`
const SH1 = styled.h1`
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    padding: 60px 0;
`