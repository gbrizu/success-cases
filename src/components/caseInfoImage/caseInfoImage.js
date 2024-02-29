export default function CaseInfoImage({ images }) {
    return (
        <div style={{ background: "#7b7af5", margin: "auto", position: "relative", display: "flex" }}>
            <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                {images.map((image, index) => (
                    <img key={index} src={image} style={{ margin: "10px", width:"30%"}} />
                ))}
            </div>
        </div>
    )
}