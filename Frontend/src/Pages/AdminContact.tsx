import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import AdminNavbar from "../Admin/AdminNav";
import axios from "axios";


export default function AdminContact() {
    const toast = useToast()
    const [data, setData] = useState([])
    console.log('data', data)
    useEffect(() => {
        axios.get(`https://fitlyfe.onrender.com/contact`)
            .then((data) => {
                setData(data.data.contact)
                console.log(data.data.contact)
            })
            .catch((err) => {
                toast({ title: 'Try Again!!', status: 'error', position: 'top', duration: 1500, isClosable: true, })
            })
    }, [])

    return (
        <Box>
            <AdminNavbar />

            <Box display={'block'} w={['95%','80%','85%']} m={'1cm auto'}>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th w={'4%'}>No.</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Mobile</Th>
                                <Th>Massage</Th>
                            </Tr>
                        </Thead>
                        <Tbody >
                            {data && data.length != 0 && data?.map((ele, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{ele['name']}</Td>
                                    <Td>{ele['email']}</Td>
                                    <Td>{ele['mobile']}</Td>
                                    <Td>{ele['massage']}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}