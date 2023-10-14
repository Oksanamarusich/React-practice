import styled from 'styled-components';

export const GalleryImages = styled.div`
 display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap:10px;
  
`