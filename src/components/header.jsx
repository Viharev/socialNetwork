import classes from'./../header.module.css';

const h = {
  'header': 'header_header__JPpAt',
  'logo': 'header_logo__HMQmH',
  'rightBarHeader' : 'header_rightBarHeader__dNHba'
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