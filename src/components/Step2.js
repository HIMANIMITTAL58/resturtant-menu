

import ListErrors from './ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { step2, changeStep } from '../actions/index';

class Step2 extends React.Component {
  constructor() {
    super()
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.changeStep(this.props.step+1, 'NEXT', this.props);
    };
  }

  componentWillUnmount() {
  }

  render() {
    const { listOfResturant, selectResturant, step, errors } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm()}>
                <fieldset>

                  <fieldset className="form-group">
                      Please Select the Resturant
                    <select className="form-control" placeholder="Select the Resturant" 
                    value={selectResturant}
                    onChange={ev => this.props.step2(ev.target.value, 'selectResturant')} >
                    <option value="" key={0}>--Select--</option>       
                    {listOfResturant.map(item =>{
                      return (
                        <option key={item.id} value={item.restaurant}>{item.restaurant}</option>
                      )
                    })}
                    </select>
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary"
                    onClick={() => this.props.changeStep(step-1, 'PREVIOUS')}
                    type="button">
                    Previous
                  </button>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Next
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.resturant });

export default connect(mapStateToProps, {
  step2,
  changeStep
})(Step2);
