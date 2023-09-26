import React from 'react'
import  Highlight  from 'react-highlight-words';
import css from './Results.module.css'
import { Table,TableContainer,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
export default function Results({data,searchText,page,setPage}) {
  return (
    <div className={css.container} >
      <h2>Results for {searchText}</h2>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <TableCell>Sentence</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row,index) => (
              <TableRow

                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Highlight searchWords={[searchText]}  textToHighlight={row.sentence} ></Highlight>
                  {/* {row.sentence} */}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

        

    </div>
  )
}
