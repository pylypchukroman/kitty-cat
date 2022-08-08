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
        <img
          className={styles.logo}
          src={catImg}
          alt=""
          width="50"
          height="33"
        />
      </NavLink>
      <h2 className={styles.heroText}>Hi cat lover!</h2>
      <p className={styles.subText}>Welcome to cat aplication</p>
      <div className={styles.linkWrapper}>
        <NavLink
          className={styles.votingBcg}
          activeClassName={styles.activeLink}
          to="/voting"
        >
          <img className={styles.votingImg} src={votingImg} alt="" />
          <p className={styles.linkText}>VOTING</p>
        </NavLink>
        <NavLink
          className={styles.breedsBcg}
          activeClassName={styles.activeLink}
          to="/breeds"
        >
          <img className={styles.votingImg} src={breedsImg} alt="" />
          <p className={styles.linkText}>BREEDS</p>
        </NavLink>
        <NavLink
          className={styles.galleryBcg}
          activeClassName={styles.activeLink}
          to="/gallery"
        >
          <img className={styles.votingImg} src={galleryImg} alt="" />
          <p className={styles.linkText}>GALLERY</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
