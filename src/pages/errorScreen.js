
function ErrorScreen() {
    return(
        <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"10rem"}}>
            <div style={{ border:"solid",borderColor:"skyblue", width:"50rem", height:"25rem", textAlign:"center"}}>
                <h1 style={{fontSize:"5rem", color:"grey"}}>404</h1>
                <h1 style={{color:"skyblue"}}>Error: url no valida</h1>
                <h2 style={{color:"grey"}}>Parece ser que la url solicitada no es correcta</h2>
            </div>
            
        </div>
    )
}

export default ErrorScreen;