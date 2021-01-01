import { useState, useEffect } from 'react';
import Card from '../Card';
import { Container } from './style';

const tables = {
    'easy': 3,
    'medium': 6,
    'hard': 9,
};

const Table = ({ level, customValue }) => {
    const [cards, setCards] = useState([]);
    const [activeCards, setActiveCards] = useState([]);
    const [foundItems, setFoundItems] = useState([]);

    const renderCards = (repeat) => {
        let cards = [];
        for (let i = 1; i <= repeat; i++) {
            cards.push(i)
        }
        cards = [...cards.map(item => `${item}a`), ...cards.map(item => `${item}b`)].sort(() => 0.5 - Math.random());
        return setCards(cards)
    }

    useEffect(() => {
        if (activeCards.length === 2) {
            if (activeCards[0].replace('a', '').replace('b', '') === activeCards[1].replace('a', '').replace('b', '')) {
                setFoundItems([...foundItems, [activeCards[0], activeCards[1]]])
            }
            setTimeout(() => setActiveCards([]), 1000);
        }
    }, [activeCards])

    useEffect(() => {
        if (foundItems.length === tables[level ? level : 'medium']) {
            alert('Parabéns, vc venceu!')
            setActiveCards([])
            setFoundItems([])
            renderCards(customValue ? customValue : tables[level ? level : 'medium'])
        }
    }, [foundItems])

    useEffect(() => renderCards(customValue ? customValue : tables[level ? level : 'medium']), [level, customValue])
    return (
        <Container level={level}>
            {cards.map((item) =>
                <Card
                    key={item}
                    value={item.replace('a', '').replace('b', '')}
                    isActive={foundItems.find(a => a.find(n => n === item)) || activeCards.find(n => n === item)}
                    wasFound={foundItems.find(a => a.find(n => n === item))}
                    onClick={() =>
                        activeCards.length < 2 &&
                        (!foundItems.find(a => a.find(n => n === item)) && !activeCards.find(n => n === item)) &&
                        setActiveCards([...activeCards, item])
                    }
                />
            )}
        </Container>
    );
}

export default Table;
