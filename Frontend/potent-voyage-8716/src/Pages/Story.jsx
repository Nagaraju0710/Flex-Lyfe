

import { Box,Button,Center,SimpleGrid,Text,Spinner} from "@chakra-ui/react";



import {
  Heading,
  Avatar,
  Stack,
  
} from '@chakra-ui/react'


import {useReducer,useEffect} from "react"

import axios from "axios";


const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,{type,payload}) => {

switch(type){

  case 'REQUEST_MADE':return{...state, isLoading:true}
case'REQUEST_SUCESS':return{...state, isLoading:false, data:payload}
case'REQUEST_ERROR':return{...state, isLoading:false}
default:return state
};

}





function Story (){




const [state,dispatch]=useReducer(reducer,initialState)












const getData=async(url)=>{




try{
  dispatch({type:'REQUEST_MADE'})
let res=await axios(url);

dispatch({type:'REQUEST_SUCESS',payload:res.data})

}
catch(err) {
  dispatch({type:'REQUEST_ERROR'})
 
}
}




useEffect(()=>{
const url=`https://story-nlj4.onrender.com/posts`

  getData(url)  
  
  },[])


  

  return (
    <Box  bgGradient=''  >
     
   

      <Center><Heading as='h1' size='lg' noOfLines={1} mt={"30px"}>
     Our Success Story
  </Heading>
</Center>

      {state.isLoading?
      <Center><Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    /></Center>:
      <SimpleGrid  gap='10px' columns={3} className="main_container" margin="20px" >


        {/* MApping the Data we recieve */}

        {
          state.data?.story?.map((el,i)=>{


         
        return  <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          // bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          bg="white"
          >
          <Avatar
            size={'xl'}

            // image element
            src={el.image}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />

{/* name element */}
          <Heading fontSize={'2xl'} fontFamily={'body'}>

        
          {el.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{el.title}
          </Text>
          <Text
            textAlign={'center'}
            // color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            
          {el.desc}
            
          </Text>
  
          
        
  
          <Stack mt={8} direction={'row'} spacing={4}>

            {/* like and unlike element */}
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
             Edit
            </Button>

          <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'red'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
            Delete
            </Button>
            
           
          </Stack>
        </Box>
      </Center>


            })}
      </SimpleGrid>

}

    </Box>
  );
}

export default Story