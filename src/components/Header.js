
const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        with: '40%',
        backgroundColor: '#6424FF',
        color: '#ffffff',
        alignItems: 'center',
        padding: '10px',
        marginTop: '0px',
        justifyContent: 'space-between',
        
    },
    logo:{
        width: '95px',
        height: 'auto',
    },
    quiz:{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '10px',
        width: 'auto',
        height: 'auto',
        backgroundColor: '#ffffff',
        color: '#333333',
    },

}

const Header = () => {
    return (
        <div style={styles.header}>
            <img style={styles.logo} src="/images/logo.png" alt="logo" />
            <div style={styles.quiz}>START QUIZ</div>
        </div>
    );
}

export default Header;
