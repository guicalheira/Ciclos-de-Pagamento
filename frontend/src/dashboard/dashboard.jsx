import React, {Component} from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSummary } from "./dashboardActions";

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const {credit, debt} = this.props.summary
        return(
        <div>
            <ContentHeader title='Dashboard' small='Versão 1.0'></ContentHeader>
            <Content>
               <ValueBox cols='12 4' color='green' icon='bank' value={credit.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} text='Total de Créditos'></ValueBox>
               <ValueBox cols='12 4' color='red' icon= 'credit-card' value={debt.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} text='Total de Débitos'></ValueBox>
               <ValueBox cols='12 4' color='blue' icon='usd' value={(credit-debt).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} text='Total na conta'></ValueBox>
            </Content>
        </div>
        )
    }
}


const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch=> bindActionCreators({getSummary},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

