import React, { useEffect, useState } from 'react';
import { getData } from '../../api/api';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { FaStar } from "react-icons/fa";


const Button = styled.button `
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const TableStyle = styled.table`
    display: flex; 
    flex-direction: column;     
    border: 1px solid black;
    border-radius: 20px;
    padding: 2px 30px 30px 30px;
    background-color: aliceblue;
`;

const Th = styled.th`
    color: blueviolet;
    font-weight: bolder;
    font-size: 25px;
`;

const Td = styled.td`
    text-align: center;
    font-size: 17px;
`;

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then((res) => setData(res.data.topic.relatedTopics));
      }, []);
      console.log(data);
    
    return ( 
        <div css={` width: 30%; margin: 6rem auto;`}
        >
            {data.length !==0 ? (
                <TableStyle>
                    <h1 css={`text-align: center; text-transform: uppercase; font-size: 48px;`}
                    >
                        Topics
                    </h1>
                    <table>
                        <tbody css={`flex-wrap: wrap;`}>
                            <tr>
                                {/* <Th className="id">ID</Th> */}
                                <Th>Name</Th>
                                <Th>Starts</Th>
                                {/* <Th>Starred</Th> */}
                            </tr>
                            {data.map( topic => (
                                <tr key={topic.id}>
                                    {/* <td className="id">{topic.id}</td> */}
                                    <Td className="name">{topic.name}</Td>
                                    <Td
                                        css={`width: 10px;`}
                                    >{topic.stargazerCount}</Td>
                                    <Td>
                                        <td><FaStar css={`color: gold;`}/></td>
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableStyle>
            ): null}
        </div>
        // <h1>desde tabla</h1>
     );
}
 
export default Table;