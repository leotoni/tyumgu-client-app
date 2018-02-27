import React from "react";
import { Notification } from 'react-pnotify';

export function Success(titl, txt) {
    return (
        <Notification
            type='success'
            title={titl}
            styling='bootstrap3'
            text={txt}
            animateIn='zoomInLeft'
            animateOut='zoomOutRight'
            delay={2500}
            shadow={false}
            hide={true}
            nonblock={false}
            desktop={true}
            icon={false}
            addclass="stack-bottomright"    
        />
    )
}
export function Error(titl, txt) {
    return (
        <Notification
            type='error'
            title={titl}
            styling='bootstrap3'
            text={txt}
            animateIn='bounceInLeft'
            animateOut='bounceOutRight'
            delay={2500}
            shadow={false}
            hide={true}
            nonblock={true}
            desktop={true}
            icon={false}
            addclass="stack-bottomright"     
        />)
}

export function Notice(titl, txt) {
    return (
        <Notification
            type='notice'
            title={titl}
            styling='bootstrap3'
            text={txt}
            delay={2000}
            shadow={false}
            hide={false}
            nonblock={true}
            desktop={true}
            addclass="stack-bottomright"    
        />)
}

export function Info(titl, txt) {
    return (

        <Notification
            type='info'
            title='Info example'
            styling='bootstrap3'
            text='Information message goes here'
            animateIn='lightSpeedIn'
            animateOut='hinge'
            delay={3000}
            shadow={false}
            hide={true}
            nonblock={false}
            desktop={true}
            addclass="stack-bottomright"    
        />)
}