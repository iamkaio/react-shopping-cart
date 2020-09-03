import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   
   ul.products {
   display: flex;
   flex-wrap: wrap;
   
   li {
   
   max-width: 345px;
   width: 100%;
   flex: 1 0 25%;
   margin: 5px;
   list-style: none;
   transition: ease-in-out 180ms;
   transform-origin: center center;
   &:hover {
    transform: translateY(-10px);
   }
   .product {
   width: 100%;
   display: flex;
   flex-direction: column;
   
   a {
       display: flex;
       flex-direction: column;
       img {
           max-width: 100%;
           height: auto;
       }
       p {
        color: #232323;
        margin-top: 10px;
        font-size: 14px;
       }
   }
   .product-price {
   font-size: 18px;
   font-weight: bold;
   }
   
   .btnBuy {
    border: none;
    background: transparent;
    border: 1px solid #232323;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: ease-in-out 180ms;
    cursor: pointer;
    &:hover{
      background: #232323;
      color: #fff;
    }
   }
   }
   }
   }
`;