import style from '@/styles/Card.module.css';

import Image from 'next/image';
import Profile from '../../../public/assets/belussi.jpg';
import Check from '../../../public/assets/check.svg';

export default function Card() {
    const texto = 'Olá, gostaria de marcar um encontro com a Ju!';
    return (
        <div className={style.container}>

            <div className={style.title_box}>
                <Image className={style.title_picture} src={Profile} alt="Foto da Proprietária Juliana Belussi" />
            </div>

            <div className={style.description_box}>
                <h2 className={style.description_title}>
                    Atendimento Presencial
                </h2>

                <p>Experimente a praticidade de escolher suas semijoias presencialmente! Agende uma visita ou um café e tenha acesso exclusivo a uma seleção personalizada de peças incríveis, feitas especialmente para você.</p>

                <ul className={style.list}>

                    <li>
                        <Image className={style.check} src={Check} alt="Check" />
                        <span>Comodidade: </span>
                        Ter acesso a todas as peças do estoque.
                    </li>
                    <li>
                        <Image className={style.check} src={Check} alt="Check" />
                        <span>Personalização: </span>
                        Recomendações adaptadas ao seu estilo.
                    </li>
                    <li>
                        <Image className={style.check} src={Check} alt="Check" />
                        <span>Experimente antes de comprar: </span>
                        Veja as peças de perto.
                    </li>
                </ul>


                <a className={style.button} href={`https://wa.me/+5513991303306?text=${texto}`} target="_blank">
                    agende um horário
                </a>

            </div>

        </div>
    )
}