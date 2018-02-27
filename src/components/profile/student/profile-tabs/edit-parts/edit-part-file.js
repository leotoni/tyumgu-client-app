import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux"
import axios from 'axios'
import Cookies from 'universal-cookie'
import Form from "react-jsonschema-form"
import * as jsonFormsActions from "./actions/load-forms"


class EditPartFileComponent extends Component {

    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.renderForm = this.renderForm.bind(this);
        this.Submit = this.Submit.bind(this);
        this.dataURItoBlob = this.dataURItoBlob.bind(this);
        
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
        notify: "",
        schema: null,
        formData: null
        }
    }
    
    componentDidMount() { 
        this.props.loadJsonSchemaKind(this.props.token, this.props.kind)
            .then(() => {
                this.setState({ schema: this.props.store.forms[this.props.kind] })
            })
    }


    dataURItoBlob(dataURI) {
        let byteString, 
            mimestring 
    
        if(dataURI.split(',')[0].indexOf('base64') !== -1 ) {
            byteString = atob(dataURI.split(',')[1])
        } else {
            byteString = decodeURI(dataURI.split(',')[1])
        }
    
        mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0]
    
        let content = []
        for (var i = 0; i < byteString.length; i++) {
            content[i] = byteString.charCodeAt(i)
        }

        let block = dataURI.split(";")
            , regexp = block[1].match(/name=(.+)/)
    
        return {
            blob: new Blob([new Uint8Array(content)], {type: mimestring})
            , filename: (regexp && regexp[1]) || null
        }
    }
    
    Submit(data) {
        let { action, method } = this.state.schema
            , formData = new FormData()
            , { blob, filename } = this.dataURItoBlob(data.formData[this.props.property])
        
        if (!filename) throw new Error('Invalid filename')

        formData.append(this.props.property, blob, filename)

        return axios({
            method
            , url: action.replace(this.props.replacement, this.props.api)
            , responseType: this.props.responseType || 'json'
            , headers: this.props.headers
            , data: formData
            })
            .then(answ => { 
                this.props.notyfication(answ);               
            })
            .catch(error => {
            })
    }

    renderForm(schema, formData = null) {
        if (!schema) return null
        
        let onChange = this.props.onChange || this.Change
            , onError = this.props.onError || this.Error
            , onSubmit = this.props.onSubmit || this.Submit
            , enctype = this.props.enctype

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
            , className = this.props.className || "tab-pane fade "
        
        if (!this.props.store.user[this.props.property] 
        ) {
            formData = this.props.store.user[this.props.property]
        }

        return (<div className={className} id={this.props.id}>{this.renderForm(schema, formData)} {this.state.notify}</div>)
    }
}

export default connect(
    state => ({
        store: state,
        lang: state.lang
    }),
    jsonFormsActions
)(EditPartFileComponent)