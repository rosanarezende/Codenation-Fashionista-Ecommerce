import axios from 'axios'
const baseUrl = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog"

const setProducts = (products) => ({
    type: "SET_PRODUCTS",
    payload: {
        products
    }
})

export const getProducts = () => async(dispatch) => {
    try{
        const response = await axios.get(baseUrl)
        dispatch(setProducts(response.data))

    } catch(error){
        console.error(error.message)
        alert("Não foi possível acessar a lista de produtos")
    }
}

export const setProductDetail = product => ({
    type: "SET_PRODUCT_DETAIL",
    payload: {
        product
    }
})
