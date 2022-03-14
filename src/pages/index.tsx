import {
  decrement,
  getAllPosts,
  getCounterValue,
  increment,
} from '@/app/features';
import { useGetPostsQuery } from '@/app/services';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect } from 'react';

const AppPage: NextPage = () => {
  const { refetch, isLoading } = useGetPostsQuery();
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => getCounterValue(state));
  const posts = useAppSelector(state => getAllPosts(state));

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Flex flexDirection="column" px={10} py={10}>
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize={20}>{counter}</Text>
        <Flex gap={2}>
          <Button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </Button>
          <Button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        {isLoading ? (
          <Spinner />
        ) : (
          posts.map(post => {
            return (
              <Box key={post.id}>
                <Text color="primary">{post.title}</Text>
              </Box>
            );
          })
        )}
      </Flex>
    </Flex>
  );
};

export default AppPage;
