import style from './../../public/css/Components/Contact.module.css'

export default function Contact(){
    return(
        <div id="contactez-nous"  className={style.Contact_us}>

            <div className={style.section_title}>
                <h5> CONTACTEZ NOUS </h5>
            </div>
            <form>
                <div className={style.form_container + "row text-center"}>
                    <div className="">
                        <input type="text" className={style.form_input + " col-lg-8 col-md-12 col-sm-12"} placeholder="Nom" />
                    </div>
                    <div className="">
                        <input type="email" className={style.form_input + " col-lg-8 col-md-12 col-sm-12"} placeholder="Email" />
                    </div>
                    <div className="">
                        <input type="tel" className={style.form_input + " col-lg-8 col-md-12 col-sm-12"} placeholder="Téléphone" />
                    </div>

                    <div className="">
                        <textarea className={style.form_input + " col-lg-8 col-md-12 col-sm-12"} ></textarea>                    
                    </div>
                </div>

                <div className={style.submit_box + " row text-center"}>
                    <button className={style.submit}>ENVOYER</button>
                </div>
            </form>
        </div>
    );
}