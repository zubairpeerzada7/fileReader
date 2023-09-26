import { InputLabel } from '@mui/material';
import { Input } from '@mui/material'
import React from 'react'
import css from './FileUpload.module.css'
export default function FileUpload({files,setFiles}) {
  return (
    <div className={css.container} >
      <InputLabel color='primary' variant='standard' sx={{mb:1}} htmlFor='files' >Upload File</InputLabel>
      <input type='file'
      accept='.doc, .docx, .xls, .xlsx, application/pdf'
      name='files'
      id='files'
      multiple
      
      // value={file}
      onChange={(e) => {
        setFiles(e.target.files)
      }}
      />
    </div>
  )
}
