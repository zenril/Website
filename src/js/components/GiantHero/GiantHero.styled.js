import styled from 'astroturf';

export const GiantHero = styled.div`
  @import '~@theme/colors.scss';

  height: 100vh;
  background: $color-nightblue;

  &.variant-dark {
    background: $color-red-dark;
  }
`