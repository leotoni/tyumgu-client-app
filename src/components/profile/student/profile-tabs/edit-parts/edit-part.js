import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import Form from "react-jsonschema-form";
import * as jsonFormsActions from "./actions/load-forms";
import Cookies from 'universal-cookie';
import axios from "axios";

class EditPartComponent extends Component {

    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.renderForm = this.renderForm.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    static PropTypes = {
        id: PropTypes.string.isRequired
        , property: PropTypes.string.isRequired
        , kind: PropTypes.string.isRequired
        , token: PropTypes.string.isRequired
        , headers: PropTypes.object.isRequired
        , replacement: PropTypes.string.isRequired
        , enctype: PropTypes.string.isRequired
        , responseType: PropTypes.string
        , className: PropTypes.string
        , onChange: PropTypes.function
        , onSubmit: PropTypes.function
        , onError: PropTypes.function
    }

    componentWillMount() {
         this.state={
            schema: null, 
            formData: null,
         }
    }

    componentDidMount() { 
        console.log('render child component');

        this.props.loadJsonSchemaKind(this.props.token, this.props.kind)
            .then(() => {

                const schema = this.props.store.forms[this.props.kind];
                this.setState({ schema });
            })
    }

    Submit(data) {
        let { action, method } = this.state.schema
            , { formData } = data

        formData = this.setDefaults(formData, this.state.schema.JSONSchema, '')

        return axios({
              method
            , url: action.replace(this.props.replacement, this.props.api)
            , responseType: this.props.responseType || 'json'
            , headers: this.props.headers
            , data: { [this.props.property]: formData }
            })
            .then(answ => { 
                console.log(answ);
                this.props.notyfication(answ);
            })
            .catch(error => {
                console.log(error)
            })
    }

    setDefaults(formData, schema, defaultValue = null) {
        formData = formData || {}

        Object.entries(schema.properties).map(([key, value]) => {
            if (!formData[key]) {
                formData[key] = value.type === 'array'
                    ? []
                    : defaultValue
            }

            return value
        })

        return formData
    }

    renderForm(schema, formData = null) {
        if (!schema) return null
        
        let onChange = this.props.onChange || this.Change
            , onError = this.props.onError || this.Error
            , onSubmit = this.props.onSubmit || this.Submit
            , enctype = this.props.enctype

        formData = this.setDefaults(formData, schema.JSONSchema, '')

        return <Form
            schema={schema.JSONSchema}
            uiSchema={schema.UISchema}
            onChange={onChange}
            onSubmit={onSubmit}
            onError={onError}
            formData={formData}
            enctype={enctype}
        />
    }

    render() {
        let formData = null
            , schema = this.state.schema || null
            , className = this.props.className || "tab-pane fade ";

      
            formData = this.props.store.user[this.props.property]
     
        return (<div className={className} id={this.props.id}>{this.renderForm(schema, formData)}</div>)
    }
}

export default connect(
    state => ({
      store: state,
      lang: state.lang
    }),
    jsonFormsActions
  )(EditPartComponent)