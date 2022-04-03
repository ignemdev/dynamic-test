import { spacing, border } from '../helpers/theme';
import { Card, CardContent, Typography } from '@mui/material/';

const Header = () => {
    return (
        <Card variant="primary" sx={{ ...spacing, ...border }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="h4" component="div" sx={{ marginBottom: 3, width: '100%', fontWeight: 'bold', textTransform: 'uppercase' }} >
                    ¿Qué tan saludable te sientes?
                </Typography>
                <Typography variant="body2">
                    ¡Descubre que tan saludable es tu estilo de vida! Simplemente responde las siguientes preguntas con honestidad. Siguenos en nuestras redes sociales para que conozcas más sobre nuestra campaña Better for you. ¡No olvides compartirnos tus resultados @dblmarket!
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Header;