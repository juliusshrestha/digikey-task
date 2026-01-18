import Filters from '#components/Filters';

import styles from './styles.module.css';

function Home() {
    return (
        <div className={styles.homePage}>
            <Filters />
        </div>
    );
}

export default Home;
