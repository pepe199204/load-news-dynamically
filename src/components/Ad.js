const styles = {

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: '#ffffff',
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: '#333333',
    },
    subContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: '#333333',
    },
    title:{
        fontSize: '3rem'
    },
    banner:{
        width: '100%',
        height: 'auto',
    },
    ads:{
        width: '60%',
        height: 'auto',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '10px',
        textAlign: 'center',
    }
}
const Ad = () => {
    return (
        <div style={styles.container}>
            <div style={styles.subContainer}>
                <div style={styles.subContent}>
                    <p>Why IT IS IMPORTANT</p>
                    <h1 style={styles.title}>What’s Your Online Advertising Readiness Rating?</h1>
                    <p>...will help you understand just how bullish you should be with your ad spend and where your blind spots are.</p>

                    <p>.When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).</p>

                    <p>.Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.</p>
                </div>
            </div>
            <div style={styles.subContainer}>
                <img style={styles.ads} src="/images/ads.png" alt="banner" />
            </div>
        </div>
    )
}
export default Ad;


// <div style={styles.img}>
// <img style={styles.banner} src="/images/banner.png" alt="banner" />
//     </div>