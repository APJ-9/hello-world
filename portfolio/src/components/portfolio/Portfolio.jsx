import React,{useEffect, useState} from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.css'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from '../../data'

function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [ourData, setOurData] = useState([])
    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];

      useEffect(()=>{

        switch(selected){
          case 'featured':
            setOurData(featuredPortfolio)
            break
          case 'web':
            setOurData(webPortfolio)
            break
          case 'mobile':
            setOurData(mobilePortfolio)
            break
          case 'design':
            setOurData(designPortfolio)
            break
          case 'content':
            setOurData(contentPortfolio)
            break
          default:
            setOurData(featuredPortfolio)
        }

      },[selected])
    
  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {
                list.map((item)=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))
            }
        </ul>
        <div className="container">
            {
              ourData.map((data)=>(
                <div className="item">
                  <img src={data.img} alt="" />
                  <h3>{data.title} </h3>
                </div>
              ))
            }
            
        </div>
    </div>
  )
}

export default Portfolio