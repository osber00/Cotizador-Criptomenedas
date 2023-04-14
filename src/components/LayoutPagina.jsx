
function LayoutPagina({children}) {
  return (
    <>
      <div className="nav-container ">
            <div className="bar bar--sm visible-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-md-2">
                            <a href="index.html">
                                <img className="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                                <img className="logo logo-light" alt="logo" src="img/logo-light.png" />
                            </a>
                        </div>
                        <div className="col-9 col-md-10 text-right">
                            <a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                                <i className="icon icon--sm stack-interface stack-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {children}
    </>
  )
}

export default LayoutPagina