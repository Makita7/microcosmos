

function Banner({alt, src, title, logo, white}) {
    return (
        <div className='banner'>
            <img className='background' alt={alt} src={src}/>
            {title ?
                <h1 className={white? 'title white': 'title black'}>{title}</h1>
                :<></>
            }
            {logo ?
                <img className='logoBanner' alt='banner logo' src={logo}/>
                :<></>
            }
        </div>
    );
}

export default Banner;