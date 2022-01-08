import styled, { css } from 'styled-components';

interface PropsImage {
  src?: string;
}

interface PropsText {
  text?: boolean;
}

interface ButtonRemoveProps {
  remove?: boolean;
}

export const Container = styled.div`
  position: fixed;
  background: #000000aa;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 60rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;

  @media screen and (max-width: 530px) {
    max-width: 35rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.span<PropsText>`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;

  ${(props) =>
    props.text &&
    css`
      color: #217a00;
      border: 0;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
    `}
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

export const Button = styled.button<ButtonRemoveProps>`
  border: 0;
  background: #3b74f2;
  height: 4rem;
  padding: 0 1rem;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 1rem;
  font-weight: 700;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    props.remove &&
    css`
      background: #e60000;
      width: 20rem;
    `}
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export const Image = styled.img<PropsImage>`
  width: 12rem;
  height: 12rem;
  min-width: 12rem;
  max-width: 12rem;
  border: 1px solid #ccc;
  margin-right: 1rem;
  object-fit: cover;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Description = styled.span`
  font-size: 1.4rem;
`;

export const ContainerTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

export const AlertFreight = styled.div`
  display: flex;
  background: #c7ffa6;
  border-radius: 2rem;
  height: 4rem;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 50rem;
  max-height: 32rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #3b74f2;
    border-radius: 1rem;
  }
  ::selection {
    background-color: #3b74f2;
  }
`;
