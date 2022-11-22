
export const CardPublicacion = (props) => {
    return (
        <>
            <div className="card" 
            style={{ "width": "18rem", "fontSize": "15px", "borderRadius": "20px", "margin": "auto", "minWidth": "50%"}}>
                <div className="card-body" style={{"margin": "10px 10px 10px 10px"}}>
                    <h5 className="card-title" style={{"fontFamily": "Candara"}}>{props.usuario.nombre}</h5>
                    <p className="card-text" style={{"fontFamily": "Candara", "fontSize": "25px"}}>{props.texto}</p>
                    <label style={{ "fontSize": "17px", "marginTop": "5px", "fontFamily": "Candara"}}>Comentarios</label>
                    <hr />
                    {
                        props.comments.length > 0
                        &&
                        <>
                            {
                                props.comments.map(element => (
                                    <>
                                     <h5 className="card-title" style={{"fontFamily": "Candara"}}>{element.user.nombre}</h5>
                                     <p className="card-text" style={{"fontFamily": "Candara"}}>{element.text}</p>
                                     <hr/>
                                    </>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}