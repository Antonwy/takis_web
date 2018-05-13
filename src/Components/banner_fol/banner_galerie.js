import React from 'react';
import List from '../ScrollReveal/List';
import WithScrollReveal from '../ScrollReveal/WithScrollReveal'

var imgs = [];


const RevealedList = WithScrollReveal(List);

export default class BannerGalerie extends React.Component {



    render() {

        getImages(this.props);

        return (

            <div>
                <h1>GALERIE</h1>
                <div className="images">
                    <RevealedList options={{ duration: 500 }} interval={125}>
                        {
                            imgs.map((item) => {
                                return item;
                            })
                        }
                    </RevealedList>
                </div>
            </div>
        )
    };

}

function getImages(props) {
    imgs = [];
    for (let i = 1; i <= 12; i++) {
        imgs.push(setImage(i, props));

    }
}

function setImage(index, props) {
    return <img className="gal_img" key={index.toString()} src={require(`../../img/banner_img/banner_${index}.jpeg`)} onClick={() => props.changeImage(index)} />
}