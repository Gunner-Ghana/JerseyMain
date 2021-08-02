import React, { Component } from 'react';
import JbannerItem from '../JbannerItem/jbanneritem';
import './jbanner.scss';

class jbanner extends Component {
    state = {
        index: 0,
        elements : [
            <JbannerItem imgurl={this.props.first} info={this.props.infof}/>,
            <JbannerItem imgurl={this.props.sec} info={this.props.infos}/>,
        ]
    }
    handlePreviousShow = (event)=>{
        if(this.state.index >= this.state.elements.length -1){
            this.setState({
                index: 0
            })
        }
        else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }
    handleNextShow = (event)=>{
        if(this.state.index >= this.state.elements.length - 1){
            this.setState({
                index: 0
            })
        }
        else{
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    render() {
        return (

                <div className="jbanner-main">      
                    <h2 className="jbanner-main-header">{this.props.type}</h2>
                    <div className="jbanner-main-content">
                        <div className="jbanner-main-content-arrow-left" onClick={this.handlePreviousShow}>&lt;</div>
                            {this.state.elements[this.state.index]}
                        <div className="jbanner-main-content-arrow-right" onClick={this.handleNextShow}>&gt;</div>
                    </div>
                </div>
        );
    }
}

export default jbanner;