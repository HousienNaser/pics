import './ImageList.css'
import ImageShow from './ImageShow' 

function Imagelist ({ images }){
    const renderdImages = images.map((image) =>{
        return <ImageShow key ={image.id} images= {image}/>
    })

    return <div className='image-list'>
        {renderdImages}
    </div>
}
export default Imagelist