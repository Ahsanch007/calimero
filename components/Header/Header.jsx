'use client';

import { Box, Button, Container, Flex } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import styles from './Header.module.css';
import { MenuDrawer } from '../MenuDrawer';
import { HeaderData } from './HeaderData';

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <MenuDrawer opened={opened} close={close} />
      <Box bg="#FFFFF8" pt="10px">
        <Container size="lg">
          <Flex className={styles.navbar} justify="space-between" direction="row" style={{ alignItems: 'center' }}>
            <Box className={styles.logo}>
              <Image
                src={HeaderData.burger}
                onClick={open}
                className={styles.menu}
                height={20}
                width={20}
                alt="burger"
              />

              <Image src={HeaderData.icon} className={styles.icon} height={1000} width={1000} alt="icon" />
            </Box>
            <Box className={styles.list}>
              <ul>
                {HeaderData.menu.map((data) => (
                  <li>{data.title}</li>
                ))}
              </ul>
            </Box>
            <Box className={styles.mic}>
              <Image src={HeaderData.volume} className={styles.volume} height={20} width={20} alt="mic" />

              <Button variant="filled" radius="40px" className={styles.btn}>
                {HeaderData.ctx}
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
