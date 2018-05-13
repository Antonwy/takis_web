import React from 'react';
import posed from 'react-pose';
import { easing, tween } from 'popmotion';


const IMAGE_ANIM_DURATION = 500;

const ImageAnim = posed.img({
    visible: { scaleY: 1, opacity: 1 },
    hidden: {
        scaleY: 0,
        opacity: 0,
        transition: (props) => tween({
            ...props,
            duration: IMAGE_ANIM_DURATION,
            ease: props.key === 'opacity' ? easing.linear : easing.anticipate
        })
    }
});

const OverlayAnim = posed.div({
    visible: {
        opacity: 1,
        transition: tween
    },
    hidden: {
        opacity: 0,
        transition: tween
    }
});




export default class ImageOverlay extends React.Component {

    state = {
        imgID: this.props.imageID,
        imageAnim: "hidden",
        overlayAnim: "hidden",
        overlayStyle: {
            display: 'none',
        }
    }


    startAnim = () => {
        //this.setState({ imageAnim: "hidden" });
        setTimeout(() => {
            this.setState({ imageAnim: "visible" });
            console.log('NOW')
        }, 1000)

    }

    makeAnim = () => {
        this.setState({ imageAnim: "hidden" });
        setTimeout(() => {
            this.setState({ imageAnim: "visible" });
        }, IMAGE_ANIM_DURATION);
    }


    handleCloseClick = () => {
        this.setState({
            overlayAnim: "hidden"
        });
        setTimeout(() => {
            this.props.openFullImg();
        }, IMAGE_ANIM_DURATION);
    }

    nextImg = () => {

        this.makeAnim();

        setTimeout(() => {
            if (this.state.imgID < 12) {
                this.setState({
                    imgID: this.state.imgID + 1,

                });
            } else {
                this.setState({
                    imgID: 1,

                });
            }
        }, IMAGE_ANIM_DURATION);


    }

    prevImg = () => {

        this.makeAnim();

        setTimeout(() => {
            if (this.state.imgID > 1) {
                this.setState({
                    imgID: this.state.imgID - 1,

                });
            } else {
                this.setState({
                    imgID: 12,

                });
            }
        }, IMAGE_ANIM_DURATION);

    }



    static getDerivedStateFromProps(props, current_state) {
        return {
            imgID: props.imageID,
            overlayStyle: {
                display: props.openOverlay ? undefined : 'none',
            },
            overlayAnim: props.openOverlay ? "visible" : "hidden"
        }

    }

    render() {



        return (
            <OverlayAnim
                pose={this.state.overlayAnim}
                className="overlay_back"
                style={this.state.overlayStyle}>

                <button className="switchIMG next" onClick={this.nextImg}>&#8250;</button>
                <button className="switchIMG prev" onClick={this.prevImg}>&#8249;</button>

                <div className="overlay_content">
                    <button className="close" onClick={this.handleCloseClick}>&#10006;</button>

                    <ImageAnim
                        pose={this.state.imageAnim}
                        src={require(`../img/banner_img/banner_${this.state.imgID}.jpeg`)} />

                </div>
            </OverlayAnim >
        )
    };


}