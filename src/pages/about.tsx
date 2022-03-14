import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <Heading as="h1">About Page</Heading>
      <Link href="/">Home Page</Link>
    </>
  );
};

export default AboutPage;
