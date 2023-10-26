import React from 'react'
import { Alert } from "@material-tailwind/react";

export const AlertDelete = () => {
  return (
    <div className='my-2 mx-2'>
      <Alert color="green" className='p-2'>Berhasil delete data.</Alert>
    </div>
  )
}
