import styled from 'styled-components';
import css from '@styled-system/css';

export const Front = styled.div(({ isActive }) =>
    css({
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'white',
        borderRadius: '10px',
        transform: isActive ? 'none' : 'rotateY(180deg)',
        transition: 'all ease-in-out 250ms',
    })
);

export const Container = styled.div(({ wasFound }) =>
    css({
        width: '220px',
        height: '220px',
        margin: '10px',
        border: '2px solid #333',
        borderRadius: '10px',
        fontSize: '300%',
        cursor: 'pointer',
        perspective: '300px',
        background: '#333',
        transform: wasFound ? 'scale(0.8)' : '',
        opacity: wasFound ? 0.5 : 1,
        filter: wasFound ? 'grayscale(0.8)' : '',
    })
);
