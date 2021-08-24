import styled, {css} from 'styled-components';
export const Container = styled.div`
  ${props => props.navbar && css`
    color: #1c1c1c;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: ${props => props.row};
    align-items: center;
    align-content: center;
    justify-content: space-around;
    background-color: aliceblue;
    flex-wrap: wrap;
  `}
  ${props => props.logo && css`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0 !important;
  `}

  ${props => props.social && css`
    display: flex;
    background-color: transparent;
    width: 10vw;
    position: fixed;
    left: 0;
    height: 100%;
    align-content: center;
    align-items: center;
    justify-content: center;
  `}

  ${props => props.collumn && css`
    display: flex;
    flex-direction: column;  
  `}
`;

export const Text = styled.span`
  font-family: 'Avocado';
  ${props => props.logo && css`
    font-size: 2rem;
    display: block;
    color: #1c1c1c;
  `}
  ${props => props.menu_item && css`
      margin: 0 10px;
      cursor: pointer;
  `}
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${props => props.row};
`
export const Anchor = styled.ul`
    font-size: 1rem;
    font-weight: 500;
    color: #515151;
    text-decoration: none;
`
