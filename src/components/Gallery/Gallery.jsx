import SearchForm from 'components/SearchForm/SearchForm';
import style from './Gallery.module.css';
import sprite from '../../icons/sprite.svg';

const Gallery = () => {
  return (
    <>
      <SearchForm />
      <div className={style.navBar}>
        <div className={style.navWrapper}>
          <button type="button" className={style.returnBtnWrapper}>
            <svg className={style.returnBtnImg}>
              <use href={sprite + '#icon-back'}></use>
            </svg>
          </button>
          <div className={style.wrapper}>
            <p className={style.navBarText}>GALLERY</p>
            <button type="button" className={style.upoadBtn}>
              <svg className={style.uploadIcon}>
                <use href={sprite + '#icon-upload'}></use>
              </svg>
              <span className={style.uloadBtnText}>UPLOAD</span>
            </button>
          </div>
        </div>
        <div className={style.selectWrapper}>
          <div className={style.orderAndType}>
            <form>
              <label className={style.orderForm}>
                <span className={style.FormText}>ORDER</span>
                <select className={style.Select}>
                  <option value="random">Random</option>
                  <option value="desc">Desc</option>
                  <option value="asc">Asc</option>
                </select>
              </label>
            </form>
            <form>
              <label className={style.typeForm}>
                <span className={style.FormText}>TYPE</span>
                <select className={style.Select}>
                  <option value="all">All</option>
                  <option value="static">Static</option>
                  <option value="animated">Animated</option>
                </select>
              </label>
            </form>
          </div>
          <div className={style.breedAndLimit}>
            <form>
              <label className={style.orderForm}>
                <span className={style.FormText}>BREED</span>
                <select className={style.Select}>
                  <option value="none">None</option>
                  <option value="abyssinian">Abyssinian</option>
                  <option value="dengal">Bengal</option>
                  <option value="agean">Agean</option>
                </select>
              </label>
            </form>
            <form>
              <label className={style.typeForm}>
                <span className={style.FormText}>LIMIT</span>
                <select className={style.Select}>
                  <option value="5">5 items per page</option>
                  <option value="10">10 items per page</option>
                  <option value="15">15 items per page</option>
                  <option value="20">20 items per page</option>
                </select>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
