import styled from 'styled-components';

export const ProductCartContainer = styled.div`
 width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
 
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

     @media screen and (max-width: 970px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    line-height: 20px;
    font-size: 13px;
    border-radius: 4px;
    padding: 0 25px 0 25px;
  }
  }

  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 970px) {
    width: 60vw;
   
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    } }

`;



export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
  text-align: right;
`;