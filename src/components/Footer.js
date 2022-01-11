
const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        with: '40%',
        height: '50px',
        backgroundColor: '#6424FF',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        marginBottom: '40px',
        
    },
    button:{
        width: '30%',
        height: 'auto',
        backgroundColor: '#06F48A',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '10px',
        textAlign: 'center',
        bottom: '200px',
    },
    text:{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        paddingTop: '20px',
        width: 'auto',
        height: 'auto',
    }

}

const Footer = () => {
    return (
        <div style={styles.footer}>
            <p style={styles.text}>Find Out YOUR Online Advertising Readiness Rating!</p>
            <div style={styles.button}>START QUIZ</div>
        </div>
    );
}

export default Footer;
