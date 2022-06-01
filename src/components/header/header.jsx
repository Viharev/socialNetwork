import classes from'./header.module.css';

const h = {
  'header': 'header_header__z8ezc',
  'logo': 'header_logo__wLirW',
  'rightBarHeader' : 'header_rightBarHeader__NjmYe'
}


const Header = () => {
    return (
      <div>
         <div className = {h.header}>
             <div className= {h.logo}></div>
             <div className={h.rightBarHeader}></div>
         </div>
      </div>
    );
  }

  export default Header;