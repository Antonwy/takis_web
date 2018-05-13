import React from 'react';


export default class BannerBack extends React.Component {


    render() {
        return (
            <div className="banner_back" style={{ visibility: this.props.visibility ? "visible" : "hidden", backgroundColor: this.props.bannerInfo.backgroundColor }}>
                <div className="back_content" style={{ color: this.props.bannerInfo.textColor }}>
                    <h1>{this.props.bannerInfo.header}</h1>
                    <p>{this.props.bannerInfo.longDescription}</p>
                    <button onClick={() => { this.props.flipBanner(false); }} style={{ color: this.props.bannerInfo.textColor, backgroundColor: this.props.bannerInfo.buttonColor }}>BACK</button>
                </div>
            </div>
        )
    };

}