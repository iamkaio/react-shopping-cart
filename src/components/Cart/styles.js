import styled from 'styled-components';

export const CartWrapper = styled.div`
   width: 100%;
   padding: 15px;
`;
export const HeaderCart = styled.div`
   width: 100%;
   margin-bottom: 20px;
`;

export const PreviewCart = styled.div`
   width: 100%;
   
   ul {
   display: flex;
   flex-direction: column;

   width: 100%;
   
   li {
   display: flex;
   width: 100%;
   align-items: center;
      margin: 0px 0px 15px 0;
   padding: 0px 0px 15px 0;
   border-bottom: 1px solid #f2f2f2;
   animation: previewItems ease-in-out 280ms forwards;
   @keyframes previewItems {
   0% {
   opacity: 0;
   transform: translateX(-15px);
   }
   100% {
   opacity: 1;
   transform: translateX(0px);
   }
   }
   
   .img-preview {
   width: 100px;
   height: 100px;
   
   img {
   max-width: 100%;
   height: 100%;
   object-fit: cover
   ;
   }
   }
   
   .title-preview {
   width: 100%;
   height: 100px;
   margin: 0 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   span {
      p {
   font-size: 14px;
   &:first-child {
   font-weight: bold;
   }
   }
   }

   
   .remove {
width: fit-content;
    border: none;
    border-radius: 50px;
    background: transparent;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
   }
   }
   }
   }
`;


export const TotalCart = styled.div`
   width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 25px 15px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .totalPrice {
  flex: 1;
    span {
  font-size: 12px;
  text-transform: uppercase;
  }
  
  p {
  font-size: 20px;
  font-weight: bold;
  }
  }
  
  .buy {
  flex: 1;
  button {
  width: 100%;
  padding: 15px 0px;
  border: none;
  background: #ffcc77;
  }
  }
  

`;

export const ModalCheckout = styled.div`
width: 100%;
   
`;