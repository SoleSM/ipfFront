export const Footer = () => {
    return (
        <>
            <footer class="page-footer deep-purple" >
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export const NavBarInicio = () => {
    return (
        <>
            <nav>
                <div class="nav-wrapper deep-purple">
                    <a><i class="large material-icons" style={{ 'fontSize': '50px', 'paddingLeft': '2%' }}>school</i></a>
                    <ul class="right" style={{ 'marginTop': '-4.5%' }}>
                        <li><a class="waves-effect waves-light btn" href="/auth/login" style={{ 'borderRadius': '10px' }}>INICIO DE SESION<i class="material-icons right">cloud</i></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export const NavbarAtras = () => {
    return (
        <>
            <nav>
                <div class="nav-wrapper deep-purple">
                    <a><i class="large material-icons" style={{ 'fontSize': '50px', 'paddingLeft': '2%' }}>school</i></a>
                    <ul class="right" style={{ 'marginTop': '-4.5%' }}>
                        <Link type="button" className="btn btn-outline-primary me-md-2" to={-1}><MdArrowBackIos color={props.colorIcon}/></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}