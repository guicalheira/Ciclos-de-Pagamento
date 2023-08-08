import React ,{Component} from "react";
import { Connect, connect } from "react-redux";
import { bindActionCreators } from "redux";
import {reduxForm, Field} from 'redux-form'
import labelAndInput from "../common/form/labelAndInput";

import { init } from "./billingCycleActions";
import { map } from "lodash";

class BillingCycleForm extends Component{

    render(){
        const {handleSubmit, readOnly} = this.props

        return(
           <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field readOnly={readOnly} name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder="Informe o Nome" ></Field>
                <Field readOnly={readOnly} name='month' component={labelAndInput} label='Mês' type="number" cols='12 4' placeholder="Informe o Mês" ></Field>
                <Field readOnly={readOnly} name='year' component={labelAndInput} label='Ano' type='number'cols='12 4' placeholder="Informe o Ano" ></Field>
            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button"className="btn btn-default" onClick={this.props.init}>Cancelar</button>
            </div>
           </form>
        )
    }
}


BillingCycleForm =reduxForm({form:'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(null,mapDispatchToProps)(BillingCycleForm)
