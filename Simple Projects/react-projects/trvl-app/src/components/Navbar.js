import Button from "./Button"

const Navbar = () => {
    return (
        <nav style={{ background: "black", color: "white", fontSize: "20px" }} className="navbar navbar-expand-lg navbar-dark p-3 fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">TRVL</a>
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Product</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <Button btnName="SIGN UP" bg="transperant" color="white" />
                </form>
            </div>
        </nav>
    );
}

export default Navbar;