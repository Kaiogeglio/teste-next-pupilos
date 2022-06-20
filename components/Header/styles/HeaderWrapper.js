import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary);
    color: #fff;
`;

export const Title = styled.h1`
    color: #fff;
`;

export const Item = styled.li`
    color:  ${( props ) => props.active ? props.active : '#000'}
`;
