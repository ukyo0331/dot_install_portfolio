import { FC, memo } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { UserIcon } from '../atoms/UserIcon';
import { LinkIcon } from '../atoms/LinkIcon'

export const Header: FC = memo(() => {
    return (
        <SContainer>
            <SHeader>
                <div>    
                    <UserIcon 
                        src={`${process.env.PUBLIC_URL}image/taro.png`}
                        alt='アイコン'
                        width='120'
                        height='120'
                    />
                </div>
                <SProf>   
                    <SH1>山田太郎</SH1>
                    <p>UI/UXデザイナー見習いです</p>
                    <SUl>
                        <li>
                            <a href="#">
                                <LinkIcon
                                    src={`${process.env.PUBLIC_URL}image/blog.png`}
                                    alt='ブログアイコン'
                                />
                            </a>
                        </li>
                        <SLi>
                            <a href="#">
                                <LinkIcon
                                src={`${process.env.PUBLIC_URL}image/photos.png`}
                                alt='写真アイコン'
                                />
                            </a>
                        </SLi>
                    </SUl>
                </SProf>
            </SHeader>
        </SContainer>
    )
})

const SHeader = styled.header`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 32px 0;

    `
const SContainer = styled.div`
    background: #efefef
    `
const SH1 = styled.h1`
    font-weight: normal;
    font-size: 24px; 
`
const SUl = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
`
const SLi = styled.li`
    margin-left: 8px;
`
const SProf = styled.div`
    margin-left: 32px;
`