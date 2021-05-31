import Typography from "@material-ui/core/Typography";
import {ImageGrid} from "./ImageGrid";

const About = () => {
    return (<div>
            <ImageGrid/>
            <Typography variant={'h6'}>
                Hola . Como estas ?
            </Typography>
            <Typography >
                By profession am a developer.
                My mantra of life: Get up and dance.
            </Typography>
            <Typography variant={'h5'} paragraph={true}
            >
                Code . Play . Smirk . Slay
            </Typography>
            <Typography>
                As a full stack developer, I develop features of application based on the requirements .
            </Typography>
            <Typography> Believe data modelling is the crux of any problem statement for a sustainable, readable and
                performant
                app with proper representation of the business use cases.
            </Typography></div>
    );
};

export default About;