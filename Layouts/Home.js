import Image from 'next/image'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsPencilSquare} from 'react-icons/bs'
import {HiOutlineSearch , HiOutlineCode} from 'react-icons/hi'
import {SiAdobeindesign} from 'react-icons/si'
import {FaRegComment} from 'react-icons/fa'
import style from './../public/css/Pages/Home.module.css'
import Navbar from './Navbar'
import ContactUs from './Components/Contact'
import Footer from './Footer'

export default function Home(props){
    console.log(props)
    return(
        <>
        <header className={style.header}>
          <Navbar />
          <div className={style.title  + " container"}>
              <div className={style.site_title}>
                  <div className="">
                    <h1>ETICES</h1>
                  </div>
                  <div className="">
                    <h2>DYNAMICS</h2>
                  </div>
              </div>

              <div className={style.site_slogan}>
                  <h4> LET'S DREAM AND CREATE </h4>
              </div>
          </div>
          <div className={style.dropdown}>
            <div className={style.dropdown_text}>
              <span>Défilé vers le bas </span>
            </div>

            <div className={style.dropdown_icon_box}>
              <IoIosArrowDropdown onClick={props.scroll} className={style.dropdown_icon}/>
            </div>
          </div>

      </header>

        <section id="a-propos" className={style.about_us}>
            <div className={style.section_title}>
                <h5> A PROPOS DE NOUS </h5>
            </div>

            <article className={style.about_us_description + " container"}>
              <div className="row text-center">
                  <div className={style.about_us_description + " col-lg-6 col-md-12"}>
                      <BsPencilSquare className={style.about_us_description_icon + " col-lg-2 col-md-6"} />
                      <span className={style.about_us_description_text + " col-lg-10 col-md-6"}>
                      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                      </span>
                  </div>

                  <div className={style.about_us_description + " col-lg-6 col-md-12"}>
                      <BsPencilSquare className={style.about_us_description_icon + " col-lg-2 col-md-6"} />
                      <p className={style.about_us_description_text + " col-lg-10 col-md-6"}>
                      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                      </p>
                  </div>

              </div>       
            </article>
        </section>

        <section  className={style.services}>

          <div className={ " col-lg-6 col-md-12 col-sm-12"}>
                <h3>LOREM IPSUM</h3>

                <p className={style.services_text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>

                <p className={style.list_expertise}>
                  <ul className={style.list}>
                      <li className={style.list_item}>DESGN COMPLETEMENT RESPONSIVE</li>
                      <li className={style.list_item}>QUALITE ELEVE DE CODE</li>
                      <li className={style.list_item}>COMMUNICATIONS & MEDIAS SOCIAUX</li>
                  </ul>
                </p>
          </div>

          <div className={ style.etiquette_box + " col-lg-6 col-md-12 col-sm-12"}>
              <div className={style.first_etiquette}>
                  <Image src="/images/etiquette-etices-dynamics.png" alt="Des étiquettes portant Etices Dynamics" height={500} width={800} />
              </div>

              <div className={style.second_etiquette}>
                  <Image src="/images/etiquette-etices-dynamics.png" alt="Des étiquettes portant Etices Dynamics" height={500} width={800} />       
              </div>
          </div>
        </section>

        <section id="expertise" className={style.expertise_box}>
            <div className={style.section_title}>
                <h5> EXPERTISE </h5>
            </div>

            <div className={style.expertise_list}>
                <div className={style.expertise_item + " col-lg-3 col-md-12 col-sm-12"}>
                    <div className={style.icon_box}>
                      <SiAdobeindesign className={style.icon} />
                    </div>
                    <div>
                        <span>DESIGN</span>
                    </div>
                    <div>
                        <p>
                          Créations de vos logos professionnels, flyers, affiches, bannières, mockups, animations... 
                        </p>
                    </div>
                </div>

                <div className={style.expertise_item + " col-lg-4 col-md-12 col-sm-12"}>
                  <div className={style.icon_box}>
                    <HiOutlineCode className={style.icon} />
                  </div>
                  <div>
                    <span>DEVELOPPEMENT</span>
                  </div>
                  <div>
                    <p>
                      Créations de site internet, blog, portofolios, applications web, applications mobiles...
                    </p>
                </div>
                </div>

                <div className={style.expertise_item + " col-lg-4 col-md-12 col-sm-12"}>
                  <div className={style.icon_box}>
                    <FaRegComment className={style.icon} />
                  </div>
                  <div>
                    <span>COMMUNICATIONS</span>
                  </div>
                  <div>
                    <p>
                      Créations de site internet, blog, portofolios, applications web, applications mobiles...
                    </p>
                  </div>
                </div>
            </div>
        </section>
      
        <article className={style.expertise_infos}>
            <div className={style.expertise_infos_item}>

              <div className={style.text}>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </span>         
              </div>

              <div className={style.image_box}>
                  <Image className={style.image} src="/images/programmeur.jpg" alt="Service de programmation" width={800} height={380} />
              </div>
            
            </div>

            <div className={style.expertise_infos_item}>

              <div className={style.image_box} >
                <Image className={style.image} src="/images/developpeur-sur-son-pc.jpg" alt="Service de d" width={800} height={380} />
              </div>

              <div className={style.text}>
                <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>           
              </div>
            
            </div>
        </article>
      
        <section id="realisations" className={style.our_realisations + " text-center"}>
            <div className={style.section_title}>
              <h5 className="text-center"> NOS REALISATIONS </h5>
            </div>
            <div className={style.section_message}>
                <h4>Nous aimons le design propre et les solutions digitales avancées</h4>
            </div>
            <div className={style.our_realisations_container + " container"}> 
                <div className="row">
                    <div className={style.our_realisations_item + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.realisation_image}>
                            <Image className={style.image} src="/images/maquette-du-site-web-Einformatique.jpg" alt="maquette du site E-informatique réalisé par l'équipe" width={250} height={800} />
                        </div>

                        <div className={style.realisation_title}>
                            <span>E-INFORMATIQUE</span>
                        </div>

                        <div className={style.realisation_description}>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                    </div>

                    <div className={style.our_realisations_item + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.realisation_image}>
                            <Image src="/images/maquette-de-l'application-mobile-quiz.jpg" alt="maquette de l'application quiz réalisé par l'équipe" width={200} height={800} />
                        </div>

                        <div className={style.realisation_title}>
                            <span>QUIZ</span>
                        </div>

                        <div className={style.realisation_description}>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                    </div>


                    <div className={style.our_realisations_item + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.realisation_image}>
                            <Image src="/images/maquette-du-site-de-essukpe.jpg" alt="maquette du site essukpè  languages réalisé par l'équipe" width={200} height={800} />
                        </div>

                        <div className={style.realisation_title}>
                            <span>ESSUKPE LANGUAGES AND DIGITAL INSTITUTE</span>
                        </div>

                        <div className={style.realisation_description}>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                    </div>

                    <div className={style.our_realisations_item + " col-lg-3 col-md-6 col-sm-12"}>
                    <div className={style.realisation_image}>
                        <Image src="/images/maquette-du-site-web-kakushn.jpg" alt="maquette du site kakushin corporation réalisé par l'équipe" width={200} height={800} />
                    </div>

                    <div className={style.realisation_title}>
                        <span>KAKUSHIN CORPORATION</span>
                    </div>

                    <div className={style.realisation_description}>
                        <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                </div>

                </div>
            </div>
        </section>

        <section id="notre-team" className={style.our_team + " text-center"}>
          <div className={style.section_title}>
              <h5> NOTRE TEAM </h5>
            </div>
            <div className={style.section_message}>
                <h4>Les principales personnes qui coordonnent les activités au sein de l'équipe</h4>
            </div>
            <div className={style.our_team_container + " container"}> 
                <div className="row">
                    <div className={style.our_team_member + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.member_image}>
                            <Image className={style.image} src="/images/marcel-vivenagbo-ceo-etices.jpg" alt="Membre de l'equipe"  width={390} height={474} />
                        </div>

                        <div className={style.name_box}>
                            <div className={style.name}>
                                <span>Marcel VIVENAGBO</span>
                                <span> CEO - Dev FullStack</span>
                                <span>Tech en Génie Télécoms & TICS</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.our_team_member + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.member_image}>
                            <Image src="/images/gildas-gbemavo-cto-etices.jpg" alt="Membre de l'equipe"  width={420} height={511} />
                        </div>

                        <div className={style.name_box}>
                            <div className={style.name}>
                                <span>Gildas GBEMAVO</span>
                                <span> CTO - Dev FullStack</span>
                                <span>Tech en Génie Télécoms & TICS</span>
                            </div>
                        </div>
                    </div>


                    <div className={style.our_team_member + " col-lg-3 col-md-6 col-sm-12"}>
                        <div className={style.member_image}>
                            <Image src="/images/farouk-gbadamassi-cdo.jpg" alt="Membre de l'equipe"  width={346} height={420} />
                        </div>

                        <div className={style.name_box}>
                            <div className={style.name}>
                                <span>Farouk GBADAMASSI</span>
                                <span> CDO - Dev Front-End</span>
                                <span>Tech en Génie Télécoms & TICS</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.our_team_member + " col-lg-3 col-md-6 col-sm-12"}>
                    <div className={style.member_image}>
                        <Image src="/images/maryse-gahou-dev-etices.jpg" alt="Membre de l'equipe" width={360} height={437} />
                    </div>

                    <div className={style.name_box}>
                        <div className={style.name}>
                            <span>Maryse GAHOU</span>
                            <span>Dev FullStack</span>
                            <span>Tech en Génie Télécoms & TICS</span>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>

        <ContactUs />
        <Footer />
        </>
    );
}