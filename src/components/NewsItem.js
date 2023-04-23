import React from 'react'

const NewsItem=(props)=> {
  
    const{imgUrl,title,description,newsUrl,author,newsDate,mode,emode}=props;
    return (
      <div>
       <div className="card my-3" style={(mode==='light')?{background:'white',color:'black'}:{background:'#222222',color:'white'}}>
  <img className="card-img-top" src={imgUrl?imgUrl:"https://trustwave.azureedge.net/media/15372/news-release-default-image.jpg?rnd=131992183680000000"} alt="Image not available"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{emode==='0'?description:""}</p>
    {emode==='0' &&<p className="card-text"> By {author?author:"Unknown"} on {new Date(newsDate).toGMTString()} </p>}
    <a rel="noreferrer noopener"  href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem;