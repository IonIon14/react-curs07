const initial_state = {
    products: []
}


export function cartReducer(state = initial_state, action) {
    console.log(state);
    switch (action.type) {
        case 'ADD_TO_CART':
            let productInCart = false;

            const updatedProducts = state.products.map((product) => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;

                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            });
            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]

                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case 'REMOVE_FROM_CART':
                const index = state.products.findIndex(item => item.id === action.payload.id);
                return state.products.filter((_, i) => i !== index);

        default:
            return state;

    }
}