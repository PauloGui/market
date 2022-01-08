import styled from 'styled-components';

export const Container = styled.div`
  height: 20rem;
  width: 40rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 1rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  min-width: 12rem;
  max-width: 12rem;
  border: 1px solid #ccc;
  margin-right: 1rem;
  object-fit: cover;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.span`
  font-size: 1.4rem;
`;

export const Title = styled.span`
  font-size: 1.6rem;
`;

export const Button = styled.button`
  border: 0;
  background: #3b74f2;
  height: 4rem;
  padding: 0 1rem;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 1rem;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;
