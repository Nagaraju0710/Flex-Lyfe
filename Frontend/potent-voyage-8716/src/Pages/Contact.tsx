import { Box, Input, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../Components/Navbar';

export const Contact = () => {
    const toast = useToast()
    const currentDate = new Date()
    const date = `${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    const [massage, setMassage] = useState('');

    let obj = { name, email, mobile, date, massage }

    const handleSubmit = () => {
        if (name == '' && email == '' && mobile == '' && massage == '') {
            toast({ title: 'Fill all the box', status: 'error', position: 'top', duration: 1500, isClosable: true, })
        } else {
            axios.post(`http://localhost:8080/contact/post`, obj)
                .then((data) => {
                    // console.log(data.data)
                    toast({ title: 'Thank You', description: data.data.msg, status: 'success', position: 'top', duration: 1500, isClosable: true, })
                })
                .catch((err) => {
                    toast({ title: 'Try Again!!', status: 'error', position: 'top', duration: 1500, isClosable: true, })
                })
            setName('')
            setEmail('')
            setMobile('')
            setMassage('')
        }
    }

    return (
        <div>
            <Navbar />
            <Box w={'80%'} m={'1cm auto'}>
                <Box display={'flex'} w={'100%'} m={'10px auto'} justifyContent={'space-between'} flexDirection={['column', 'column', 'row']} gap={'15px'}>
                    <Box w={'100%'}>
                        <Input value={name} p={'25px 15px'} onChange={(e) => setName(e.target.value)} type="text" placeholder={'Name'} border={'1px solid grey'} />
                    </Box>
                    <Box w={'100%'}>
                        <Input value={email} p={'25px 15px'} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={'Email'} border={'1px solid grey'} />
                    </Box>
                </Box>
                <Box display={'flex'} w={'100%'} m={'10px auto'} justifyContent={'space-between'} flexDirection={['column', 'column', 'row']} gap={'15px'}>
                    <Box w={'100%'}>
                        <Input value={mobile} p={'25px 15px'} onChange={(e) => setMobile(e.target.value)} type="text" placeholder={'Mobile'} border={'1px solid grey'} />
                    </Box>
                    <Box w={'100%'}>
                        <Input value={date} onChange={() => console.log()} p={'25px 15px'} type="text" placeholder={`${date}`} border={'1px solid grey'} />
                    </Box>
                </Box>
                <Box display={'flex'} w={'100%'} m={'10px auto'} justifyContent={'space-between'} flexDirection={['column', 'column', 'row']} gap={'15px'}>
                    <Box w={'100%'}>
                        <Input value={massage} p={'25px 15px'} onChange={(e) => setMassage(e.target.value)} h={'120px'} type="text" placeholder={'Massage'} border={'1px solid grey'} />
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                    <Button onClick={handleSubmit} w={'200px'} m={'10px 0'} bg={'#4FC3F7'} color={'white'}>SEND</Button>
                </Box>

            </Box>
        </div>
    )
}