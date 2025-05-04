import styled from 'styled-components';

export const Conteiner = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 12.375rem; // 198px
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem; // 1216px
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-weight: 600;
      font-size: 2rem; //32px
    }

    h2 {
      color: #fff;
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem; //16px
      line-height: 150%;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  }
`;
