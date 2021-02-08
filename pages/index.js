import Head from 'next/head'
import HomePage from './../Layouts/Home'
import {React , Component} from 'react'

export default class  Home extends Component {

    constructor(){
        super()

        this.description = "ETICES Dynamics vous propose des services en conception graphique(création de logo pour votre entreprise, de flyers , d'affiches pour la publicité , des cartes de visite, des cartes de voeux..). Vous avez également la possibilté de créer un site internet , un blog , des applications mobiles et faire connaître votre en entreprise en ligne grâce à la communication digitale. "
        this.keywords    = "ETICES Dynamics , services en informatique , conception graphique , logo , flyers , carte de visite , carte de voeux , site internet , blog , applications mobile , communications digitale , publicité en ligne."
    }
    
    componentDidMount() {
    }
    
    scrollToDown = () => {
      window.scrollTo(0,document.body.scrollHeight);
    }

    render(){
      return (
        <div className="">
          <Head lang="fr">
            <title>ETICES Dynamics</title>
            <link rel="icon" href="/images/favicon.png" />
            <meta name="description" content={this.description} />
            <meta name="keywords"    content={this.keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
            <meta charset="UTF-8" />
          </Head>
    
          <HomePage scroll={this.scrollToDown} />
    
        </div>
      );
    }
  
}
