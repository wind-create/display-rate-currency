import React from 'react'

const Coin = (props) => {
    return (
        <tr>
            <th>{props.Name}</th>
            <th>{props.Buy}</th>
            <th>{props.Exchange}</th>
            <th>{props.Sell}</th>
        </tr>

    )
}

export default Coin
