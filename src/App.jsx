import LayoutPagina from './components/LayoutPagina'

function App() {

  return (
    <LayoutPagina>
      <div className="main-container">
        <section className="bg--secondary text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Cotizador de Criptomonedas</h1>
                        <p className="lead">
                            Cotiza las 20 Criptomonedas más populares del mercado
                        </p>
                        <div className="boxed boxed--lg bg--white text-left">
                            <form className="form--horizontal row">
                            <div className="col-md-5">
                                    <div className="input-select">
                                        <select>
                                            <option value="">Select a discipline</option>
                                            <option value="design">Design</option>
                                            <option value="development">Development</option>
                                            <option value="management">Management</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-select">
                                        <select>
                                            <option value="">Select a discipline</option>
                                            <option value="design">Design</option>
                                            <option value="development">Development</option>
                                            <option value="management">Management</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn--primary type--uppercase">Cotizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Resultados de la consulta</h2>
                        <p className="lead">
                            Resultados de la consulta de cotizaciones
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </LayoutPagina>
  )
}

export default App
