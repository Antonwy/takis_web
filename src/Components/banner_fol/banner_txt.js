import React from 'react';



export default class BannerTxt extends React.Component {

    state = {
        pose: "idle"
    }

    setVisibility = () => {
        this.props
    }


    render() {
        return (
            <div>
                <h1>{this.props.bannerInfo.header}</h1>
                <p>{this.props.bannerInfo.shortDescription}</p>
                <button
                    style={{ backgroundColor: this.props.bannerInfo.buttonColor }}
                    onClick={() => {
                        this.props.flipBanner(true);
                    }}>

                </button>
            </div >
        )
    };

}