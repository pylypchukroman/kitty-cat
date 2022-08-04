import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
// import logoImg from '../../images/logo-min.png';
import votingImg from '../../images/voting-img-min.png';
import breedsImg from '../../images/breeds-img-min.png';
import galleryImg from '../../images/galerry-img-min.png';
import catImg from '../../images/NicePng_monster-hunter-world-png_4416314.png';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink exact to="/">
        <img src={catImg} alt="" width="50" height="33" />
      </NavLink>
      <h2 className={styles.heroText}>Hi intern!</h2>
      <p className={styles.subText}>Welcome to MI 2022 Front-end test</p>
      <p className={styles.apiText}>Lets start using The Cat API</p>
      <div className={styles.linkWrapper}>
        <NavLink
          className={(styles.link, styles.votingBcg)}
          activeClassName={styles.activeLink}
          to="/voting"
        >
          <img className={styles.votingImg} src={votingImg} alt="" />
          <p className={styles.linkText}>voting</p>
        </NavLink>
        <NavLink
          className={(styles.link, styles.breedsBcg)}
          activeClassName={styles.activeLink}
          to="/breeds"
        >
          <img className={styles.votingImg} src={breedsImg} alt="" />
          <p className={styles.linkText}>breed</p>
        </NavLink>
        <NavLink
          className={(styles.link, styles.galleryBcg)}
          activeClassName={styles.activeLink}
          to="/gallery"
        >
          <img className={styles.votingImg} src={galleryImg} alt="" />
          <p className={styles.linkText}>gallery</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
