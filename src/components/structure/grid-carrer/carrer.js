import style from './carrer.module.sass'
import Item from './item/item';

export default function Carrer() {


  return (
    <div className={style.carrer}>
      <div className={style.carrer_area}>
        
        <div className={style.grid_small}><Item /></div>
        <div className={style.grid_small}><Item /></div>
        <div className={style.grid_small}><Item /></div>
        <div className={style.grid_big}></div>

      </div>
    </div>
  );
}


