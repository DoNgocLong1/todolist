
import styled from "styled-components";
import width from "constants/widthHeight";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${width.sideBarWidth};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #15202C;
    .ant-menu-dark{
        background-color: transparent
    }
    .ant-menu-title-content{
        flex: unset !important;
        font-size: 1.1em
    }
    .ant-menu-item-selected{
        background-color: #00CC90 !important;
    }
    svg{
        color: #fff;
        font-size: 1.2em
    }
`

export const Header = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 0px #1D3544;
`

export const Image = styled.img`
    height: 1.2em;
    cursor: pointer;
`

export const Workspace = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    /* height: 25%; */
    padding: 0.3em 0.5em;
    gap: 0.5em;
    /* overflow-y:scroll; */
`

export const WorkspaceWrapper = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    align-items:center;
    padding: 0.5em;
    border-radius: 0.55em;
    background-color: #2D3742;
`


export const AvatarWrapper = styled.div`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    overflow: hidden;
    background-color: #00CC90;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 1.5em;
    }
`

export const Avatar = styled.img `
    width: 100%;

`

export const DetailWorkspace = styled.div`
    flex: 3;
    padding: 0 0.5em;
`

export const Title = styled.p`
    opacity: 0.8;
    font-size: 0.75em;
    width: 100%;
    color: #fff;
    text-align: left;
    
`

export const NameWorkspace = styled(Title)`
    font-size: 0.8em;
    opacity: 1;
    font-weight: bold;
`


export const Icon = styled.i`
    color: #fff;
    font-size: 0.8em;

`

export const QuickAccess = styled(Header)`
    display: flex;
    gap: 0.2em;
`


export const AccessImage = styled(Image)`
    height: 1em;
`

export const AccessTitle = styled(Title)`
    font-size: 0.8em;

`

export const TaskFeature = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

`

export const ListFeature = styled.ul`
    display: flex;
    flex-direction: column;
`


export const Author = styled(WorkspaceWrapper)`
    background-color:transparent;
    box-shadow: 0px -1px 0px #1d3544;
    border-radius: unset;
    position: absolute;
    bottom: 0.5em;
`