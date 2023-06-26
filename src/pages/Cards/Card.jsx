import React from "react"

export default function Card(props) {
    const {choose ,setChoose} =props
    
    
    return (
        <>
            <div className={`container_card ${props.id === 2 ? 'green' : ''}`} >
                <h1>{props.type}</h1>
                <h4>{props.desc}</h4>
                <hr />
                <h1 className="price"> {props.price} {props.id !==1 && <span>/{choose ==="Monthly" ? "month" : "year"}</span>}</h1>
                <div className="notes">
                    <p>{props.note_1}</p>
                    <p>{props.note_2}</p>
                    <p>{props.note_3}</p>
                </div>
                <button  className={`pricing-herobtn ${props.id === 2 ? 'white' : ''}`} >Start Free Trial</button>
            </div>
        </>
    )
}
