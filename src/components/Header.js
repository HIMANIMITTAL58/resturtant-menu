import React from 'react';

class Header extends React.Component {
  render() {
    const { step } = this.props;
    return (
      <div className="step-container">
        <div className="step-border">
          <span className={step===1 ? 'ative-step': 'inactive-step'} onClick={() => this.props.changeStep(1, 'STEP')}>Step1</span>
          <span className={step===2 ? 'ative-step': 'inactive-step'} onClick={() => this.props.changeStep(2, 'STEP')}>Step2</span>
          <span className={step===3 ? 'ative-step': 'inactive-step'} onClick={() => this.props.changeStep(3, 'STEP')}>Step3</span>
          <span className={step===4 ? 'ative-step': 'inactive-step'} onClick={() => this.props.changeStep(4, 'STEP')}>Step4</span>
        </div>
      </div>
    );
  }
}

export default Header;
