import { memo, FC } from 'react';
import styled from 'styled-components'

const content = [
    {
        src: `${process.env.PUBLIC_URL}image/work1.png`,
        title: "勇者ゲーム",
        description:"すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。"
    },
    {
        src: `${process.env.PUBLIC_URL}image/work2.png`,
        title: "宝探しゲーム",
        description:"すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。"
    },
    {
        src: `${process.env.PUBLIC_URL}image/work3.png`,
        title: "神経衰弱",
        description:"すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。すごいゲームです。"
    }
]

export const Works: FC = () => {
    return (
        <>
            {content.map((res) => {
                return (
                    <section>
                        <img 
                            src={res.src} 
                            alt={res.title} 
                            width='400'
                            height='225'
                        />
                        <SH2>{res.title}</SH2>
                        <SP>{res.description}</SP>
                    </section>
                )
            })}
        </>
    )
}

const SH2 = styled.h2`
    font-weight: normal;
    font-size: 20px;
    margin-top: 16px;
`
const SP = styled.p`
    line-height: 1.8;
    margin-top: 16px;
`