const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#6424FF',
        color: '#ffffff',
    },
    subContainerLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        backgroundColor: '#6424FF',
        color: '#ffffff'
    },
    subContainerRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        backgroundColor: '#6424FF',
        color: '#ffffff',
    },
    subContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
        backgroundColor: '#6424FF',
        color: '#ffffff',
    },
    title:{
        fontSize: '3rem'
    },
    banner:{
        width: '100%',
        height: 'auto',
    },
    button:{
        width: '100%',
        height: 'auto',
        backgroundColor: '#06F48A',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '10px',
        textAlign: 'center',
    }
}
const Banner = () => {
    return (
        <div style={styles.container}>
            <div style={styles.subContainerLeft}>
                <div style={styles.subContent}>
                    <p>ATTENTION ONLINE ADVERTISERS</p>
                    <h1 style={styles.title}>What’s Your Online Advertising Readiness Rating?</h1>
                    <p>When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.</p>
                    <div>
                        <div style={styles.button}>START QUIZ</div>
                    </div>
                    <p>Learn more about Readiness Raitings</p>
                </div>
            </div>
            <div style={styles.subContainerRight}>
                <img style={styles.banner} src="/images/banner.png" alt="banner" />
            </div>
        </div>
    )
}
export default Banner;


// <div style={styles.img}>
// <img style={styles.banner} src="/images/banner.png" alt="banner" />
//     </div>