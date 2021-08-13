const Button = ({ btnName, bg, color }) => {
    console.log(color)
    return (
        <button
            style={{
                background: bg,
                color: color,
                fontWeight: "900",
                border: "1px solid white",
                paddingRight: "15px",
                paddingLeft: "15px",
                marginRight: "15px"
            }}
            className="btn">
            {btnName}
        </button>

    );
}

export default Button;