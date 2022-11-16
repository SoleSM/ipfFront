import styled from 'styled-components';

const Title = styled.h3`
    font-family: Candara;
    text-align: center;
    color: black;
    font-weight: bold;
    margin-top: 2%
`;
const Botones = styled.div`
   
    margin-top: 10%;
    
    
`;

const RegistroUsuario = () => {

    // const [formLoginValues, handleInputChange] = useForm({
    //     loginEmail: 'miliserrrano@gmail.com',
    //     loginPassword: 'hola123'
    // });

    // const { loginEmail, loginPassword } = formLoginValues;

    // const handleOnSubmit = async (e) => {
    //     e.preventDefault()
    //     login(loginEmail, loginPassword)
    // }

    return (
        <>

            <section className="vh-100 deep-purple">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ "borderRadius": "15px" }}>
                                <div className="card-body p-4 p-md-5">
                                    <Title>Registro de usuarios</Title>
                                    <form>
                                        <div className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">Nombre</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="text" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">Apellido</label>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">DNI</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="date" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">Fecha de nacimiento</label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="number" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">Email</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="text" id="autocomplete-input" className="autocomplete" />
                                                    <label for="autocomplete-input">Contraseña</label>
                                                </div>
                                            </div>


                                            <label for="autocomplete-input">Género</label>
                                            <select class="browser-default" style={{ 'width': '50%' }}>
                                                <option value="" disabled selected>Elige una opción</option>
                                                <option value="femenino">Femenino</option>
                                                <option value="masculino">Masculino</option>
                                                <option value="otro">Otro</option>
                                            </select>

                                            <label for="autocomplete-input">Tipo de usuario</label>
                                            <select class="browser-default" style={{ 'width': '50%' }}>
                                                <option value="" disabled selected>Elige una opción</option>
                                                <option value="profesor">Profesor</option>
                                                <option value="alumno">Alumno</option>
                                                <option value="admin">Administrador</option>
                                            </select>

                                        </div>

                                            <button class="btn waves-effect  green darken-1  col s6" type="submit" name="action" style={{'width': '49%', 'marginTop': '5%'}}>Submit
                                                <i class="material-icons right">send</i>
                                            </button>

                                            <button class="btn waves-effect amber col s6" type="submit" name="action" style={{'width': '49%', 'marginTop': '5%'}}>Limpiar Campos
                                                <i class="material-icons right">delete</i>
                                            </button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RegistroUsuario;