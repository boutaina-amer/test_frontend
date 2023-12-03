import React, { useState } from 'react';
import { Button, Text, Heading, Flex } from '@chakra-ui/react';

const Count = () => {

  const [count, setCount] = useState(0);

  // incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
  };

  // décrémenter le compteur
  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <Flex direction="column" alignItems="center" justifyContent="center" height="80vh">

        <Flex alignItems="center" justifyContent="center" marginBottom="4">
          <Text fontSize="2xl" color={count > 0 ? 'blue' : count < 0 ? 'red' : 'inherit'}>{count}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center">

          <Button onClick={decrement} colorScheme="red" marginRight="2" size="lg">-</Button>
          <Button onClick={increment} colorScheme="blue" size="lg">+</Button>

        </Flex>
      </Flex>
    </div>
  );
};

export default Count;
