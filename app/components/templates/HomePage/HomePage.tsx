import styles from './HomePage.module.scss';

const HomePage = (): JSX.Element => (
  <div className={styles.content}>
    <span className={styles.author}>
      Made by{' '}
      <a href={'https://yannickwittwer.dev'} target="_blank" rel="noreferrer">
        yannickwittwer.dev
      </a>
    </span>
  </div>
);

export default HomePage;
