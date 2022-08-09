//Styles
import styles from './GalleryPage.module.css';
//Components
import Navigation from 'components/Navigation/Navigation';
import Gallery from 'components/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
