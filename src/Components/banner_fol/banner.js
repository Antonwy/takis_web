import React from 'react';
import BannerContent from './banner_content';
import BannerBack from './banner_back';


export default class Banner extends React.Component {

    state = {
        bannerFlip: false,
        visibility: false,
    }

    flipBanner = (value) => {

        this.setState({ bannerFlip: !this.state.bannerFlip });


        setTimeout(() => {
            this.setState({
                visibility: !this.state.visibility
            });

            if (value != undefined) {
                this.props.flipFunc(this.props.bannerInfo.id, value);
            }

        }, 125);


    }


    componentWillReceiveProps(newprops) {

        if (newprops.bannerFlip.flipped && this.props.bannerFlip.id === this.props.bannerInfo.id && this.state.bannerFlip && this.props.bannerInfo.id !== newprops.bannerFlip.id) {
            this.flipBanner();

        }


    }


    render() {

        let bannerClass = ["banner"];
        if (this.state.bannerFlip) {
            bannerClass.push("banner_flip");
        }

        return (
            <div className={bannerClass.join(" ")} style={{ backgroundColor: this.props.bannerInfo.backgroundColor }}>

                <BannerContent
                    visibility={this.state.visibility}
                    bannerInfo={this.props.bannerInfo}
                    flipBanner={this.flipBanner}
                    openFullImg={this.props.openFullImg}
                />

                <BannerBack
                    visibility={this.state.visibility}
                    flipBanner={this.flipBanner}
                    bannerInfo={this.props.bannerInfo}
                />


            </div >
        );
    }

}







