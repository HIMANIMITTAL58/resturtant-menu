import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'
import { changeStep } from '../actions/index';

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }

  render() {
    const { step } = this.props;

      return (
        <div>
          <Header step={this.props.step} changeStep={(value, type) => this.props.changeStep(value, type, this.props)} />
          {step === 1 ? 
          <Step1 /> : step === 2 ?
          <Step2 /> : step === 3 ?
          <Step3 /> : step === 4 ?
          <Step4 /> : null
          }
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    ...state.resturant
  }};


export default connect(mapStateToProps,{changeStep})(App);
