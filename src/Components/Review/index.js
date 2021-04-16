import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Quote } from 'theme/Icons';

const Review = () => {
    return (
        <Flex
            justify='space-between'
            mt={16}
            direction={{ base: 'column', md: 'row' }}
        >
            <Box>
                <Icon as={Quote} boxSize={16} />
            </Box>
            <Box ml={{ md: 40 }}>
                <Text fontSize='lg' lineHeight='taller' fontWeight={200}>
                    Absolutely brilliant. Don't use any other tour guide or company, these
                    guys are the best of the best. Our guide Sölvi was, as you can tell
                    from the other glowing reviews, excellent to say the least. Icelandic
                    Mountain Guides and Iceland Rovers were fantastic - personable, easy
                    to deal with, enthusiastic, knowledgable, and just plain nice people.
                    It made a huge difference on our trip, we're VERY glad we went with
                    them!
                </Text>
                <Text mt={10} fontSize='sm'>
                    theUSJourneyman — 2020-01-24
                </Text>
            </Box>
        </Flex>
    );
};

export default Review;
