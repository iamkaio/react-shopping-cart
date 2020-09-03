import styled from 'styled-components';

export const FilterWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   padding: 0px 5px;
`;
export const Orders = styled.div`
   display: flex;
   
   .filter-sort {
   display: flex;
   flex-direction: column;
   p {
   font-size: 12px;
   text-transform: uppercase;
   letter-spacing: 2px;
   }
   
   select {

   border: 1px solid #232323;
padding: 5px 5px;
    background: transparent;
    width: 150px;
   }
   }   
   .filter-size {
   display: flex;
   flex-direction: column;
   margin-left: 15px;
   p {
   font-size: 12px;
   text-transform: uppercase;
   letter-spacing: 2px;
   }
   
   select {

   border: 1px solid #232323;
padding: 5px 5px;
    background: transparent;
    width: 150px;
   }
   }
`;