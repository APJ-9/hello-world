import React,{useState} from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.css'

function Portfolio() {
  const [selected, setSelected] = useState('featured')
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
            <div className="item">

            </div>
        </div>
    </div>
  )
}

export default Portfolio