export default function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper"><a className="header__logo logo"><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/></a>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li><a className="link main-nav__link link--current" href="#">Каталог</a>
            </li>
            <li><a className="link main-nav__link" href="#">Где купить?</a>
            </li>
            <li><a className="link main-nav__link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form className="form-search__form" id="form-search">
            <button className="form-search__submit" type="submit">
              <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
                <use xlinkHref="#icon-search"></use>
              </svg><span className="visually-hidden">Начать поиск</span>
            </button>
            <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?"/>
            <label className="visually-hidden" htmlFor="search">Поиск</label>
          </form>
          <ul className="form-search__select-list hidden">
            <li className="form-search__select-item" >Четстер Plus</li>
            <li className="form-search__select-item" >Четстер UX</li>
            <li className="form-search__select-item" >Четстер UX2</li>
            <li className="form-search__select-item" >Четстер UX3</li>
            <li className="form-search__select-item" >Четстер UX4</li>
            <li className="form-search__select-item" >Четстер UX5</li>
          </ul>
          <button className="form-search__reset" type="reset" form="form-search">
            <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg><span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <a className="header__cart-link" href="#" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg><span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </a>
      </div>
    </header>
  );
}
