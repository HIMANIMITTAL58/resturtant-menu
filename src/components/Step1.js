

import ListErrors from './ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { step1, changeStep } from '../actions/index';

class Step1 extends React.Component {
  constructor() {
    super();
    this.submitForm = () => ev => {
      ev.preventDefault();
      // if(this.props.selectMeal === ''){
      //   alert('Please Select the meal');
      //   return false
      // }
      // if(this.props.numberofPeople < 1){
      //   alert('Please Enter the NUmber Of People');
      //   return false
      // }
      this.props.changeStep(this.props.step+1, 'NEXT', this.props);
    };
  }

  componentWillUnmount() {
  }

  render() {
    const { listofMeals, selectMeal, numberofPeople, errors } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm()}>
                <fieldset>

                  <fieldset className="form-group">
                      Please Select the Meal
                    <select className="form-control" placeholder="Select the Meal" 
                    value={selectMeal}
                    onChange={ev => this.props.step1(ev.target.value, 'selectMeal')} >
                    <option value="" key={0}>--Select--</option>       
                    {listofMeals.map(item =>{
                      return (
                        <option key={item.name} value={item.value}>{item.name}</option>
                      )
                    })}
                    </select>
                  </fieldset>

                  <fieldset className="form-group">
                      Please Enter Number of People
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      min='0'
                      value={numberofPeople}
                      onChange={ev => this.props.step1(ev.target.value, 'numberofPeople')} />
                  </fieldset>

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
  step1,
  changeStep
})(Step1);
