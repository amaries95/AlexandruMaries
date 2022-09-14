import style from './AboutMe.module.css';

export default function AboutMe(props)
{
    const text = "La 30 iunie 2022, rezervele valutare la Banca Naţională a României se situau la nivelul de 42,03 miliarde de euro, față de 40,9 miliarde de euro la 31 mai 2022.BNR mai precizează că în cursul lunii au avut loc următoarele operațiuni: Intrări de 5,25 miliarde de euro, reprezentând: modificarea rezervelor minime în valută constituite de instituțiile de credit la BNR; alimentarea conturilor Ministerului Finanțelor; alimentarea contului Comisiei Europene și altele;Ieşiri de 4,13 miliarde de euro, reprezentând: modificarea rezervelor minime în valută constituite de instituțiile de credit la BNR; plăți de rate și dobânzi în contul datoriei publice denominate în valută și altele. Nivelul rezervei de aur s-a menţinut la 103,6 tone. În condiţiile evoluţiilor preţurilor internaţionale, valoarea acesteia s-a situat la 5,79 miliarde de euro.";

    return (
        <div className={style.container}>
            <div className={style['describe-me']}>
                <div className={style['about-me']}>
                    <h3>About Me</h3>
                </div>
                <p >&emsp;&emsp;{text}</p>
            </div>
            <div className={style['describe-me']}>
                <div className={style['about-me']}>
                    <h3>Basic Information</h3>
                </div>
                <p>dsa</p>
            </div>
        </div>
    );
}