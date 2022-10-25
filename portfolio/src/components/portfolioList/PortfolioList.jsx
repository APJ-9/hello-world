import React from 'react'
import './PortfolioList.css'

function PortfolioList({title,active,setSelected,id}) {
  return (
    <li className={active ? " portfolioList active" : "portfolioList"} 
    onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}

export default PortfolioList