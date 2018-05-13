import React from 'react';
import BannerTxt from './banner_txt';
import BannerGalerie from './banner_galerie';





export default class BannerContent extends React.Component {

    state = {
        image: this.props.bannerInfo.id,
    }

    changeImage = (id) => {
        this.setState({ image: id });
    }


    SelectType = () => {
        switch (this.props.bannerInfo.style) {
            case "table":
            case "text":
                return (
                    <BannerTxt
                        bannerInfo={this.props.bannerInfo}
                        flipBanner={this.props.flipBanner}
                    />
                );
            case "photos":

                return (
                    <BannerGalerie changeImage={this.changeImage} />
                );


        }
    }
    render() {

        return (
            <div className="table" style={{ visibility: this.props.visibility ? "hidden" : "visible" }}>
                <div className="full_cell">
                    <img
                        className="banner_img"
                        src={require(`../../img/banner_img/banner_${this.state.image}.jpeg`)}
                        alt="Banner" >
                    </img>
                    <div id="fullscreen" onClick={() => { this.props.openFullImg(this.state.image); }}></div>
                </div>
                <div className={"banner_content"} style={{ color: this.props.bannerInfo.textColor }}>
                    {
                        this.SelectType()
                    }

                </ div>

            </div>


        );
    }

}