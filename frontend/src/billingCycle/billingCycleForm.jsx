import React ,{Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from "../common/form/labelAndInput";
import CreditList from "./creditList";
import { init } from "./billingCycleActions";


class BillingCycleForm extends Component{

    render(){
        const {handleSubmit, readOnly, credits} = this.props

        return(
           <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field readOnly={readOnly} name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" ></Field>
                <Field readOnly={readOnly} name='month' component={labelAndInput} label='Mês' type="number" cols='12 4' placeholder="Informe o mês" ></Field>
                <Field readOnly={readOnly} name='year' component={labelAndInput} label='Ano' type='number'cols='12 4' placeholder="Informe o ano" ></Field>
                <CreditList cols='16 6' readOnly={readOnly} list={credits}></CreditList>
            </div>
            <div className="box-footer">
                <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                <button type="button"className="btn btn-default" onClick={this.props.init}>Cancelar</button>
            </div>
           </form>
        )
    }
}


BillingCycleForm =reduxForm({form:'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps= state =>({credits:selector(state,"credits")})
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)
