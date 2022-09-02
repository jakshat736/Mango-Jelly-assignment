import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    mainContainer: {
        margin:50,
        background: '#a4b0be',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:1000
    },
    box: {
        width: '50%',
        height: 'auto',
        background: '#fff',
        borderRadius: 5
    },
    headingText: {
        fontSize: 18,
        fontWeight: 700,
        padding: 2,
        margin: 3,
        color: '#636e72'
    },
    gridStyle: {
        padding: 10,

    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

});
