import style from "./card-carrer.module.sass";

export default function CardCarrer({title, date}) {
  return (
    <>
      <div className={style.card_body}>
        <p className={style.card_title}>{title}</p>
        <span className={style.card_date}>{date}</span>
      </div>
    </>
  );
}
