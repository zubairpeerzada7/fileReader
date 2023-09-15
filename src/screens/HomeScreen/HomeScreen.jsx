import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import FileUpload from '../../components/FileUpload/FileUpload'
import css from './HomeScreen.module.css'
import Results from '../../components/Results/Results'
import { constructData } from './helpers'

export default function HomeScreen() {
  const [searchText,setSearchText] = React.useState('')
  const [files,setFiles]  = React.useState(null)
  const [error,setError] = React.useState(null)
  const [data,setData] = React.useState([])
  
  React.useEffect(()=>{
    
  },[files])
  React.useEffect(()=>{(async ()=>{
      if(files&&files.length>0&&searchText&&searchText.length>0){
        const [data,error] = await constructData(files,searchText.trim())
        if(error){
          setError("failed to read file")
          setData([])

        }
        else{
          setError(null)
        setData(data)

        }
      }
  })()},[searchText,files])
  const OnReset = () => {
    setFiles(null)
      setSearchText('')
      setError(null)
  }
  return (
    <div  style={{width:"100%"}} >

        <Topbar searchText={searchText} setSearchText={setSearchText} OnReset={OnReset} />
        <div className={css.container} >
            <FileUpload files={files} setFiles={setFiles} />
          <Results data={data} page={1}  searchText={searchText}  />
        </div>
       
    </div>
  )
}
