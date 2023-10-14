import styled from 'styled-components';

export const GalleryItem = styled.div`
border-radius: 2px;
  &:hover{
  border:0;
  box-shadow: ${props => props.theme.shadows.regular};
}

`;
export const GalleryImg = styled.img`
 display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
 `
