import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab, showTabs } from "../common/tab/tabActions";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";

import List from "./billingCycleList";
import Form from "./billingCycleForm"
import {create,update,undo} from './billingCycleActions'

class BillingCycle extends Component{

          componentWillMount(){
            this.props.selectTab('tabList')
            this.props.showTabs('tabList','tabCreate')
           
          }
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'></ContentHeader>
                <Content>
                                       
                    <Tabs>
                       <TabsHeader>
                         <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                         <TabHeader label ='Incluir' icon='plus' target='tabCreate'></TabHeader>
                         <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                         <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                       </TabsHeader>
                       <TabsContent>   
                         <TabContent id='tabList'><List></List></TabContent>
                         <TabContent id='tabCreate'><Form onSubmit={this.props.create}/></TabContent>
                         <TabContent id='tabUpdate'><Form onSubmit={this.props.update}></Form></TabContent>
                         <TabContent id='tabDelete'><Form onSubmit={this.props.undo} readOnly={true}></Form></TabContent>
                         
                       </TabsContent>

                    </Tabs>
               
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab,showTabs,create,update,undo},dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)
