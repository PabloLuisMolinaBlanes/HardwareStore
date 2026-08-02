import ProductItem from "../productitem/ProductItem"
import { query } from "../../../../lib/graphql_client/ApolloClient"
import { gql } from "@apollo/client"

async function fetchAllProducts() {
    const {data} = await query({
        query: gql`
        query ExampleQuery {
            products {
                price,
                description,
                name
            }
        }`
    });
    return data.products.map((product) => <ProductItem name={product.name} />);
}



export default async function Caroussel() {
    return (<>
    {await fetchAllProducts()}
    <nav><h2>Back</h2>
    <h2>Next</h2></nav>
    </>)
}