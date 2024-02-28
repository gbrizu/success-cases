export default function CaseInfoImage({images})
{
    return (
        <div style={{background: "#7b7af5", textAlign: "center", width:"1500px", height:"710px", margin:"auto"}}>
            {images.map((image, index) => (<img key={index} src={image} alt="" width={300}/>))}
            <img src="https://i0.wp.com/khipu.ai/wp-content/uploads/2019/08/Globant-DarkBG-White.png?fit=768%2C151&ssl=1" id="globant-logo" alt="" width={85} style={{position:"relative", float:"right", top:"680px", marginRight:"7px"}}/>
        </div>
    )
}