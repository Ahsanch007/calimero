'use client';

import { Container, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES = {
  xxs: rem(320),
  xs: rem(375),
  sm: rem(480),
  md: rem(768),
  lg: rem(1140),
  xl: rem(1400),
  // xxl: rem(1800),
};

export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
  breakpoints: {
    xs: '23.4375em',
    sm: '30em',
    md: '48em',
    lg: '71.25em',
    xl: '87.5em',
  },
  colors: {
    'dark-blue': [
      '#161C23',
      '#0C1219',
      '#02080F',
      '#000005',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
    ],
    red: [
      '#E50B0B',
      '#DB0101',
      '#D10000',
      '#C70000',
      '#BD0000',
      '#B30000',
      '#A90000',
      '#9F0000',
      '#950000',
      '#8B0000',
    ],
    'light-yellow': [
      '#FFFFF8',
      '#F5F5EE',
      '#EBEBE4',
      '#E1E1DA',
      '#D7D7D0',
      '#CDCDC6',
      '#C3C3BC',
      '#B9B9B2',
      '#AFAFA8',
      '#A5A59E',
    ],
    gray: [
      '#878F94',
      '#7D858A',
      '#737B80',
      '#697176',
      '#5F676C',
      '#555D62',
      '#4B5358',
      '#41494E',
      '#373F44',
      '#2D353A',
    ],
  },
});
