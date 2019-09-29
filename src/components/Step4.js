

import React from 'react';
import { connect } from 'react-redux';
import { selectOptions, changeStep, onSubmit } from '../actions/index';

class Step4 extends React.Component {
  constructor() {
    super();
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onSubmit();

    };
  }

  componentWillUnmount() {
  }

  render() {
    const { step, selectedDishDetails, selectMeal, numberofPeople, selectResturant, success } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
            <span className="success-messages">{success}</span>
              <form onSubmit={this.submitForm()}>
                <fieldset>
                  <div className="order-details">
                  <label className="review-order-label">Meal:</label>
                  <span>{selectMeal}</span>
                  </div>
                  <div className="order-details">
                  <label  className="review-order-label">No Of People:</label>
                  <span>{numberofPeople}</span>
                  </div>
                  <div className="order-details">
                  <label className="review-order-label">Resturant:</label>
                  <span>{selectResturant}</span>
                  </div>
                  <div className="order-details">
                  <label className="review-order-label">Dishes:</label>
                  <span className="order-dishes">
                    {selectedDishDetails.map((item, i) => {
                      return (
                        <span className="dishes-deatils" key={i}>
                          {item.dishName}
                          <span className="order-dishes-quantity"> - {item.quantity}</span>
                        </span>
                      )
                    })}
                  </span>
                </div>
                  <button
                    className="btn btn-lg btn-primary"
                    type="button"
                    onClick={() => this.props.changeStep(step-1, 'PREVIOUS')}>
                    Previous
                  </button>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Submit
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
  selectOptions,
  changeStep,
  onSubmit
})(Step4);
