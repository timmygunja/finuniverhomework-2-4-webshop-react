import React, {Component} from "react"
import ProductService from "../services/ProductService";
import './style.css'

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((response) => {
            this.setState({products: response.data})
        })
    }


    render() {
        return (
            <div className={"prod-table"}>
                {
                    this.state.products.map(
                        prod =>
                            <div key={prod.id} className="product">
                                <div className={"prod-pic"}>
                                    <img src={"logo512.png"} />
                                </div>

                                <div className={"prod-content"}>
                                    <h2 className={"prod-text"}>{prod.name}</h2>
                                    <h4 className={"prod-description"}>{prod.description}</h4>
                                    <h4 className={"prod-price"}>{prod.price}</h4>
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Employees