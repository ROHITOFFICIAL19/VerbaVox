import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        // height:'50%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent : 'center',
        width: '80%',
        height: '45vh',
        padding: '10%',
        borderRadius: 30,
        color: 'white',
      },
      infoCard: {
        display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 60,
      },
      container: {
        padding: '0 5%', width: '100%', margin: 0, justifyContent : 'center',
      },
});

export default styles;