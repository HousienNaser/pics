import axios from "axios"

 const searchImages = async (term) => {
const responce = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{Authorization: 'Client-ID 4heji7CEBtSuazqt8PNpX4g7Iju3aUqEGV7WZcTbQaM'
        },
        params:{
            query:term
        }
    })
    //for debuging
    // console.log(responce.data.results)
    return responce.data.results
}
export default searchImages