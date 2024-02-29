export default function CaseInfoImage({ images }) {
    return (
        <div style={{ background: "#7b7af5", margin: "auto", position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {images.map((image, index) => (
                    <img key={index} src={image} height={400} width={200} style={{ margin: "10px" }} />
                ))}
            </div>
            <img src="https://i0.wp.com/khipu.ai/wp-content/uploads/2019/08/Globant-DarkBG-White.png?fit=768%2C151&ssl=1" alt="" width={85} style={{ position: "absolute", bottom: 0, right: 0, margin: "10px" }} />
        </div>
    )
}
