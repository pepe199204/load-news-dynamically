const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
    },
    partner: {
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    partnerImage: {
        width: '60%',
        height: 'auto',
    },
}

const Partner = () => {
    return (
        <div style={styles.container}>
            <div style={styles.partner}>
                <img style={styles.partnerImage} src="/images/partners/partner1.png" alt="partner" />
            </div>
            <div style={styles.partner}>
                <img style={styles.partnerImage} src="/images/partners/partner2.png" alt="partner" />
            </div>
            <div style={styles.partner}>
                <img style={styles.partnerImage} src="/images/partners/partner3.png" alt="partner" />
            </div>
            <div style={styles.partner}>
                <img style={styles.partnerImage} src="/images/partners/partner4.png" alt="partner" />
            </div>
            <div style={styles.partner}>
                <img style={styles.partnerImage} src="/images/partners/partner5.png" alt="partner" />
            </div>
        </div>
    );
}
export default Partner;
