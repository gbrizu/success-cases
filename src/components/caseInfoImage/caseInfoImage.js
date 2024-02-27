export default function CaseInfoImage({images})
{
    return (
        <div style={{background: "#7b7af5", textAlign: "center"}}>
            <img src={images[0]} alt="" width={300}/>
            <img src={images[1]} alt="" width={300}/>
            <img src={images[2]} alt="" width={85} style={{position:"relative", float:"right", top:"580px", marginRight:"7px"}}/>
        </div>
    )
}