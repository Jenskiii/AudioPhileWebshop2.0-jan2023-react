import { useParams } from "react-router-dom"
import data from "../../data/data.json";

export function Product(){
    // slug is url name of product
    const {slug} = useParams()
    const product = data.all.find((type) => type.slug === slug);
    return (
        <>
        <h1>product - {product.name}</h1>
        </>
    )
}