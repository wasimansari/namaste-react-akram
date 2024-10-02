import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h2>oops!!!!</h2>
        <h3>Something went wrong!</h3>
        <h3>{error.status}:{error.statusText}</h3>
        <h4>{error.data}</h4>
    </div>
)
}

export default Error