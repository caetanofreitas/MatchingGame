import styled from 'styled-components';
import css from '@styled-system/css';

export const Container = styled.div(({ level }) =>
    css({
        width: '100%',
        minHeight: '80vh',
        display: level === 'custom' ? 'flex' : 'grid',
        gridTemplateColumns: `repeat(${level === 'easy' ? '3' : '6'}, 1fr)`,
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    })
);
