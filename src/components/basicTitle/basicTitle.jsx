import React, {useEffect} from 'react'
import './basicTitle.css'

export default function BasicTitle({basictitle}) {
  useEffect(() => {
    document.title = basictitle;
  }, [basictitle]);
  return (
    <h1 className="basic-title">
    {basictitle}
    </h1>
  )
}