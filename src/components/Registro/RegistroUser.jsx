import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';
import { fetchRegisterUser } from '../../redux/actions/register';
import { useDispatch } from 'react-redux';

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

    const dispatch = useDispatch()

    const [formRegisterValues, handleInputChange] = useForm({
        rNombre: "milagros",
        rApellido: "soledad",
        rDni: "44876876",
        rGenero: "Femenino",
        rFechaNacimiento: "",
        rEmail: "miliserrrrrano@gmail.com",
        rPassword: "hola123",
        rTipoUser: "alumno"
    });

    const { rNombre, rApellido, rDni, rFechaNacimiento, rEmail, rPassword, rGenero, rTipoUser } = formRegisterValues;

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(formRegisterValues)
        dispatch(fetchRegisterUser( rNombre, rApellido, rDni, rFechaNacimiento, rEmail, rPassword, rGenero, rTipoUser))
    }

    return (
        <>
            <section className="vh-100 deep-purple">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ "borderRadius": "15px" }}>
                                <div className="card-body p-4 p-md-5">
                                    <Title>Registro de usuarios</Title>
                                    <form onSubmit={handleOnSubmit}>
                                        <div className="col s12">

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name="rNombre"
                                                        value={rNombre}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">Nombre</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="text"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name='rApellido'
                                                        value={rApellido}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">Apellido</label>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name='rDni'
                                                        value={rDni}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">DNI</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="date"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name='rFechaNacimiento'
                                                        value={rFechaNacimiento}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">Fecha de nacimiento</label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="email"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name='rEmail'
                                                        value={rEmail}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">Email</label>
                                                </div>

                                                <div className="input-field col s12">
                                                    <input type="text"
                                                        id="autocomplete-input"
                                                        className="autocomplete"
                                                        name='rPassword'
                                                        value={rPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label for="autocomplete-input">Contraseña</label>
                                                </div>
                                            </div>


                                            <label for="autocomplete-input">Género</label>
                                            <select className="browser-default"
                                                style={{ 'width': '50%' }}
                                                name="rGenero"
                                                onChange={handleInputChange}
                                            >
                                                <option>Elige una opción</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Otro">Otro</option>
                                            </select>

                                            <label for="autocomplete-input">Tipo de usuario</label>
                                            <select className="browser-default"
                                                style={{ 'width': '50%' }}
                                                name="rTipoUser"
                                                onChange={handleInputChange}
                                            >
                                                <option>Elige una opción</option>
                                                <option value="profesor">Profesor</option>
                                                <option value="alumno">Alumno</option>
                                                <option value="administrador">Administrador</option>
                                            </select>

                                        </div>

                                        <button className="btn waves-effect  green darken-1  col s6" type="submit" name="action" style={{ 'width': '49%', 'marginTop': '5%' }}>Submit
                                            <i className="material-icons right">send</i>
                                        </button>

                                        <button className="btn waves-effect amber col s6" type="submit" name="action" style={{ 'width': '49%', 'marginTop': '5%' }}>Limpiar Campos
                                            <i className="material-icons right">delete</i>
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


export default  RegistroUsuario;