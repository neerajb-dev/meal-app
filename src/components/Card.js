const Card = ({cardImg, cardTitle, cardId}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={cardImg} className="card-img-top" alt={cardId}/>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <a href="#" className="btn btn-primary">{cardId}</a>
                </div>
        </div>
    )
};

export default Card;