import styled from 'astroturf';

export const Star = styled.div`
  @import '~@theme/colors.scss';

  &:nth-child(1n) {
    animation: twinkle 6s linear 6s infinite;
    animation-delay:-6s;
  }
  &:nth-child(2n) {
    animation: twinkle 9s linear 5s infinite;
    animation-delay:-5s;
  }
  &:nth-child(3n) {
    animation: twinkle 4s linear 6s infinite;
    animation-delay:-6s;
  }
  &:nth-child(4n) {
    animation: twinkle 6s linear 7s infinite;
    animation-delay:-7s;
  }
  &:nth-child(5n) {
    animation: twinkle 4s linear 8s infinite;
    animation-delay:-8s;
  }



  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 5px;


  @keyframes twinkle {
    0% {
      transform: scale(1, 1);
      background: rgba(255,255,255,0.2);
      animation-timing-function: ease-in;
    }
    60% {
      transform: scale(0.8, 0.8);
      background: rgba(255,255,255,1);
      animation-timing-function: ease-out;
    }
    80% {
      background: rgba(255,255,255,0.2);
      transform: scale(1, 1);
    }
    100% {
      background: rgba(255,255,255,0.2);
      transform: scale(1, 1);
    }
  }
`