import React from 'react'
import './article.css'

export default function Article ({articles}) {
  
  return (
    <React.Fragment>
    {articles.map(item => <div
      key={`link__${item.id}`} 
      id={`link__${item.id}`} className='article'>
      <h3 className='article__headline'>{item.headline}</h3>
      <p className='article__text'>{item.text}</p>
      </div>)}
    </React.Fragment>
)
}