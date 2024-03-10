import style from '@/styles/Card.module.css';

import Image from 'next/image';

export default function Card(props) {

    return (
        <div className={style.container}>

            <div className={style.title_box}>
                <Image className={style.title_picture} src={props.picture} alt={props.name} />
            </div>

            <div className={style.description_box}>
                <h2 className={style.description_title}>
                    {props.title}
                </h2>

                <p>{props.description}</p>

                <ul className={style.list}>

                    <li>
                        <Image className={style.check} src={props.icon} alt="Check" />
                        <span>{props.subtitle1}</span>
                        {props.description1}
                    </li>
                    <li>
                        <Image className={style.check} src={props.icon} alt="Check" />
                        <span>{props.subtitle2}</span>
                        {props.description2}
                    </li>
                    <li>
                        <Image className={style.check} src={props.icon} alt="Check" />
                        <span>{props.subtitle3}</span>
                        {props.description3}
                    </li>
                </ul>


                <a className={style.button} href={props.whatsapp} target="_blank">
                    agende um horário
                </a>
                <div className={style.midias}>
                    <a href={props.instagram}><Image className={style.midia} src={props.logo1} /></a>
                    <a href={props.whatsapp}><Image className={style.midia} src={props.logo2} /></a>
                    <a href={props.linketree}><Image className={style.midia} src={props.logo3} /></a>

                </div>

            </div>

        </div>
    )
}