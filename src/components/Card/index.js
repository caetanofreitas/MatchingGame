import { Container, Front } from './style';

const Card = ({ value, isActive, onClick, wasFound }) => (
    <Container onClick={() => !wasFound && onClick()} wasFound={wasFound}>
        <Front isActive={wasFound || isActive}>
            {value}
        </Front>
    </Container>
)

export default Card;
