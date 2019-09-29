

import ListErrors from './ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { selectOptions, changeStep, step3, removeSelectedDish } from '../actions/index';

class Step3 extends React.Component {
  constructor() {
    super();
    this.submitForm = () => ev => {
      ev.preventDefault();
      // this.props.onSubmit(email, password);
      this.props.changeStep(this.props.step+1, 'NEXT', this.props);
    };
  }

  componentWillUnmount() {
  }

  render() {
    const { listofDishes, selectedDish, numberOfServing, step, selectedDishDetails, errors, numberofPeople } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm()}>
                <fieldset>

                  <div className="select-dishes-container">
                  <div className="form-group select-dishes">
                      <span>Please Select a Dish</span>
                    <select className="form-control" placeholder="Select a Dish" 
                    value={selectedDish}
                    onChange={ev => this.props.selectOptions(ev.target.value, 'selectedDish')} >
                    <option value="" key={0}>--Select--</option>       
                    {listofDishes.map(item =>{
                      return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      )
                    })}
                    </select>
                  </div>

                  <div className="form-group serving-dishes">
                      <span>Please Enter no. of Servings</span>
                    <input
                      className="form-control"
                      type="number"
                      min='0'
                      value={numberOfServing}
                      onChange={ev => this.props.selectOptions(ev.target.value, 'numberOfServing')} />
                  </div>

                  </div>

                  <div>
                  <i className="ion-ios-plus-outline add-icon" onClick={() => this.props.step3(selectedDish, numberOfServing, numberofPeople)} ></i>

                  {selectedDishDetails.map((item, i) => {
                    return (
                      <fieldset className="dishes" key={i}>
                        {item.dishName}
                        <span className="dishes-quantity">{item.quantity}
                          <i className="ion-ios-close close-icon"  onClick={() => this.props.removeSelectedDish(i)}></i>
                        </span>
                      </fieldset>
                    )
                  })}

                  </div>

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
  selectOptions,
  changeStep,
  step3,
  removeSelectedDish
})(Step3);