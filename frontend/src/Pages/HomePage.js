import React from 'react';
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';



const HomePage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box className='flex justify-center bg-white w-full p-3 border-1 rounded-lg mt-10 mb-4'>
                <Text fontFamily="Work sans" className='text-4xl text-black font-bold'>
                    MERN-Chat-App
                </Text>
            </Box>
            <Box className='bg-white w-full p-4 text-black border-1 rounded-lg'>
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab width='50%'>Login</Tab>
                        <Tab width='50%'>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage;