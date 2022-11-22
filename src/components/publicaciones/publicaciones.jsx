import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicaciones } from '../../redux/actions/publicaciones'
import { Container, Title } from '../landing/landingLogueado';
import Spinner from '../spinners/spinner';
import { CardPublicacion } from '../card/cardpublicacion';



const Publicaciones = () => {

    const { publicaciones, cargando } = useSelector(state => state.publicaciones)
    const dispatch = useDispatch();

    const publicacionesGeneral = publicaciones.filter((element) => element.tipo == 'general')

    useEffect(() => {
        dispatch(getPublicaciones())
    }, [])

    return (
        <>
            <Container style={{ "backgroundColor": "e1bee7" }}>
                <Title>Publicaciones</Title>
                <hr style={{ "backgroundColor": "white" }} />
                {
                    cargando
                        ?
                        <Spinner />
                        :
                        <>
                            {
                                publicaciones.length > 0
                                    ?
                                    <>
                                        {
                                            publicacionesGeneral.map(element => (
                                                <CardPublicacion
                                                {...element}/>
                                            ))
                                        }
                                    </>
                                    :
                                    <div>NO hay publicaciones por el momento</div>
                            }
                        </>
                }
            </Container>
        </>
    )
}

export default Publicaciones;