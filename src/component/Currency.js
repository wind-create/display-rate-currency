import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from "styled-components";
import Coin from './Coin'

const Currency = () => {
    const [coins, setCoins] = useState([])
    const [date, setDate] = useState([])
    const data = [
        {
            name: 'CAD',
            buy: coins.CAD - (coins.CAD * 2.5 / 100),
            exchange: coins.CAD,
            sell: coins.CAD + (coins.CAD * 2.5 / 100)
        },
        {
            name: 'IDR',
            buy: coins.IDR - (coins.IDR * 2.5 / 100),
            exchange: coins.IDR,
            sell: coins.IDR + (coins.IDR * 2.5 / 100)
        },
        {
            name: 'JPY',
            buy: coins.JPY - (coins.JPY * 2.5 / 100),
            exchange: coins.JPY,
            sell: coins.JPY + (coins.JPY * 2.5 / 100)
        },
        {
            name: 'CHF',
            buy: coins.CHF - (coins.CHF * 2.5 / 100),
            exchange: coins.CHF,
            sell: coins.CHF + (coins.CHF * 2.5 / 100)
        },
        {
            name: 'EUR',
            buy: coins.EUR - coins.EUR * 2.5 / 100,
            exchange: coins.EUR,
            sell: coins.EUR + coins.EUR * 2.5 / 100
        },
        {
            name: 'USD',
            buy: coins.USD - (coins.USD * 2.5 / 100),
            exchange: coins.USD,
            sell: coins.USD + (coins.USD * 2.5 / 100)
        },
    ]
    useEffect(() => {
        axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=26e636f537e1a3d25d18b85f0d2fffd8&base=EUR&symbols=CAD,IDR,JPY,CHF,EUR,USD')
            .then(res => {
                setCoins(res.data.rates)
                setDate(res.data.date)
            }).catch(error => console.log(error))
    }, [])

    return (
        <CurrencyStyled>

            <date>Date {date}</date>
            <div className='tabel'>
                <table>
                    <tr>
                        <td></td>
                        <td>We Buy</td>
                        <td>Exchange <br></br> Rate</td>
                        <td>We Sell</td>
                    </tr>

                    {data.map((datas, index) => {
                        let weBuy = datas.buy;
                        let exchangeRate = datas.exchange;
                        let weSell = datas.sell;
                        return <Coin key={index}
                            Name={datas.name}
                            Buy={weBuy}
                            Exchange={exchangeRate}
                            Sell={weSell}></Coin>;
                    })}

                </table>
            </div>
        </CurrencyStyled>
    )
}
const CurrencyStyled = styled.nav`
    .tabel{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
    }
    table{
        border-collapse: collapse;
        width: 60%;
        text-align: center;
    }
    td{
        font-weight: bold;
        font-size: 35px;
        border-bottom: 2px solid rgb(245, 245, 245);
        padding: 10px;
        text-transform: uppercase;
    }
    tr{
        border-bottom: 1px solid rgb(217, 217, 217);
        padding: 10px;
    }
    th{
        font-weight: normal;
        font-size: 25px;
        padding: 10px;
    }
`
export default Currency;
