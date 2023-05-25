const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = (req, res) => {
    const {id} = req.params;

    axios.get(`${URL}/${id}`)
    .then((response)=>{
        const { id, status, name, species, origin, image, gender} = response.data;
        return res.status(200).json({id, status, name, species, origin, image, gender})
    })
    .catch((error) => res.status(500).send(error.message))
};

module.exports = {
    getCharById
}