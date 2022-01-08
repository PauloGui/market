import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background: #fff;
  background-image: url(${require('../../assets/chocolate-truffles-with-copy-space.jpg')});
  background-size: cover;
  position: relative;
`;

export const Text = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 28rem;
  flex-wrap: wrap;
  overflow-y: auto;

  @media screen and (max-width: 530px) {
    padding: 2rem;
  }
`;

export const ButtonCart = styled.button`
  position: absolute;
  top: 2rem;
  right: 5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const BadgeCar = styled.span`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: #3b74f2;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
`;
