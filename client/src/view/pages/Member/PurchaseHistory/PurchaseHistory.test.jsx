import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import store from './../../../../redux/store/store'
import PurchaseHistory from "./PurchaseHistory";
import {Provider} from "react-redux";
import CustomThemeProvider from "../../../HOC/CustomThemeProvider/CustomThemeProvider";

const orders = [
    {
        "products": [
            {
                "product": {
                    "enabled": true,
                    "imageUrls": [
                        "https://res.cloudinary.com/originalite-and-co/image/upload/v1628686614/product3_ynhozw.png",
                        "./img2",
                        "./img3"
                    ],
                    "quantity": 1,
                    "sizes": [
                        "xs",
                        "s"
                    ],
                    "_id": "6113c9836151b842ec1d448e",
                    "name": "suit",
                    "currentPrice": 580,
                    "previousPrice": 120,
                    "categories": "men",
                    "color": "red",
                    "productUrl": "/men",
                    "brand": "Zara",
                    "manufacturer": "Zara",
                    "manufacturerCountry": "France",
                    "seller": "Shop",
                    "itemNo": "788773",
                    "date": "2021-07-29T17:07:45.436Z",
                    "__v": 0
                },
                "cartQuantity": 1
            }
        ],
        "canceled": false,
        "_id": "611cdd2f48d8943acbb78831",
        "customerId": {
            "isAdmin": true,
            "enabled": true,
            "_id": "61113db78523d7b02120b4ed",
            "firstName": "Anton",
            "lastName": "Molchanov",
            "login": "molchanov",
            "email": "antonmolchanov97@gmail.com",
            "password": "$2a$10$5oVmyCZ2/lNPtbLxL0eTEeMqpxj2eIy241QMd7lsQkyPnp9ZPa68i",
            "telephone": "+380508088725",
            "birthdate": "22.04.1997",
            "gender": "male",
            "customerNo": "50826218",
            "date": "2021-08-09T14:37:43.407Z",
            "__v": 0,
            "birthday": "22.04.1997",
            "mobilePhone": "+380508088725"
        },
        "deliveryAddress": {
            "country": "Ukraine",
            "city": "Kiev",
            "address": "Suvorova 13",
            "postal": "01044"
        },
        "status": "not shipped",
        "email": "antonmolchanov97@gmail.com",
        "mobile": "+380508088725",
        "letterSubject": "Thank you for order! You are welcome!",
        "letterHtml": "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
        "orderNo": "2620719",
        "totalSum": 580,
        "date": "2021-08-18T10:13:03.813Z",
        "__v": 0
    }
]

const PurchaseHistoryTest = () => {
    return (
        <CustomThemeProvider>
        <BrowserRouter>
            <Provider store={store}>
                <PurchaseHistory orders={orders}/>
            </Provider>
        </BrowserRouter>
        </CustomThemeProvider>
    )
}

describe("Purchase history component", () => {

    test("should render the PurchaseHistory component", () => {
        render(<PurchaseHistoryTest/>)
    })

    test('should contain the purchase history list', () => {
        render(<PurchaseHistoryTest/>)
        const list = screen.getByTestId('purchase-history-list')
        expect(list).toBeInTheDocument()
    })
})