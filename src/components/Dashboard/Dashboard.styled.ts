import styled from "styled-components";
import width from "constants/widthHeight";
export const Container = styled.div`
    margin-left: ${width.sideBarWidth};
    width: 100%;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    border-radius: 1em 0 0 0;
    //feature
`

export const ToolsBar = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.5em 1em;
    .ant-tabs-tab{
        opacity: 0.5;
    }
    .ant-tabs-tab.ant-tabs-tab-active{
        opacity: 1 !important;
    }
    .ant-tabs{
        width: 100%;
    }
`

export const DisplayWrapper = styled.div`
    display: flex;
    gap: 0.5em;
`

export const CountTask = styled.div`
    display: flex;
`

export const Label = styled 