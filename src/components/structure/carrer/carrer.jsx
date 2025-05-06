import CardCarrer from "./card-carrer/card-carrer";
import style from "./carrer.module.sass";

export default function Carrer() {
  return (
    <div className={style.carrer_area}>
      <CardCarrer title="Tecnico de Informatica" date="Jan, 2020"/>
      <CardCarrer title="Graduação em Sistemas de Informação" date="Jan, 2023"/>
      <CardCarrer title="Estagiário em TI" date="Jun, 2024"/>
      <CardCarrer title="Estagiário em Analise de Dados" date="Dez, 2024"/>
    </div>
  );
}
