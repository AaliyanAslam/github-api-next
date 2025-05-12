import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
<div style={{display:"flex" ,   fontFamily:"sans" , justifyContent:"space-between",alignItems:"center",padding:"13px",backgroundColor:"#181C14",color:"#fff"}}>
<div>
<Link href="/">Next-Js</Link>

</div>
<div style={{display:"flex",gap:"20px", fontFamily:"sans"}}>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
<Link href="/service">Services</Link>

</div>
</div>

    </>
  )
}

export default Navbar