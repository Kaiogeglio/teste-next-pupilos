import {
    HeaderContainer,
    Title,
    Item
} from './styles/HeaderWrapper';

export default function Header() {
    return (
        <HeaderContainer>
            <Title>teste</Title>
            <ul>
                <Item active={true}>
                    teste 1
                </Item>
                <Item >
                    teste 1
                </Item>
                <Item active={'#53b'}>
                    teste 1
                </Item>
                <Item active={'red'}>
                    teste 1
                </Item>
            </ul>
        </HeaderContainer>
    )
}  
