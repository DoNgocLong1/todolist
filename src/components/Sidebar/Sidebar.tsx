import React from 'react'
import {Container,
        Header,
        Image,
        Workspace,
        WorkspaceWrapper,
        AvatarWrapper,
        DetailWorkspace,
        Title,
        NameWorkspace,
        Icon,
        QuickAccess,
        AccessTitle,
        Author
} from './Sidebar.styled'
import {
    AliwangwangOutlined,
    CodepenOutlined, 
    LinkOutlined, 
    MenuFoldOutlined,
    CodeSandboxOutlined
} from '@ant-design/icons'
import image from '../../assets/image'
import Feature from 'components/Dashboard/components/Feature';
console.log(image.logo);
const Sidebar = () => {
  return (
    <Container>
        <Header>
            <Image src = {image.logo} />
            <MenuFoldOutlined />
        </Header>
        <Workspace>
            <WorkspaceWrapper>
                <AvatarWrapper>
                    <CodepenOutlined />
                </AvatarWrapper>
                <DetailWorkspace>
                    <Title>Team</Title>
                    <NameWorkspace>Amela</NameWorkspace>
                </DetailWorkspace>
                <Icon className = 'fa-solid fa-chevron-right'></Icon>
            </WorkspaceWrapper>

            <WorkspaceWrapper>
                <AvatarWrapper>
                        <AliwangwangOutlined/>          
                </AvatarWrapper>
                <DetailWorkspace>
                    <Title>Workspace</Title>
                    <NameWorkspace>Amela</NameWorkspace>
                </DetailWorkspace>
                <Icon className = 'fa-solid fa-chevron-right'></Icon>
            </WorkspaceWrapper>

        </Workspace>
        <QuickAccess>
            <LinkOutlined />
            <AccessTitle>
                Quick Access
            </AccessTitle>
        </QuickAccess>
        <Feature/>
        <Author>
            <AvatarWrapper>
                <CodeSandboxOutlined />
            </AvatarWrapper>
            <DetailWorkspace>
            <NameWorkspace>Long Đỗ</NameWorkspace>
                <Title>Team Owner</Title>
            </DetailWorkspace>
        </Author>
    </Container>
  )
}

export default Sidebar