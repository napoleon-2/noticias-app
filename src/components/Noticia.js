import React from 'react';

const Noticia = ({noticia}) => {
    //extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    return (  
        <div className="col s12 m6 14 ">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                </div>
                
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn btn-block light-blue accent-3"
                    >
                      Ver Noticia Completa      
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Noticia;