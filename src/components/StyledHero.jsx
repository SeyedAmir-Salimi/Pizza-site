import styled from 'styled-components'

const StyledHero = styled.header`

min-height: 60vh;
background: url(${props => props.HeroImage}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}
`;
const StyledCart = styled.li`
display:${props => props.display};

`;

export {StyledHero , StyledCart };