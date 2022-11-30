import axios from "axios"

 const searchFoto = async () => {
const responce = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{Authorization: 'Client-ID 4heji7CEBtSuazqt8PNpX4g7Iju3aUqEGV7WZcTbQaM'
        },
        params:{
            query:"car"
        }
    })
    console.log(responce)
    return responce
}
export default searchFoto