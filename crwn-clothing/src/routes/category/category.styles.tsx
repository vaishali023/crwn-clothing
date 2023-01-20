import styled from 'styled-components';

export const CategoryItemsContainer = styled.div`
display: flex;
  flex-direction: column;
  
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 900px) {
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
 
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-align: center;
`;

