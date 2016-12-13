import React, { Component } from 'react'
import { ContactIcon } from '../components'

export default class Contact extends Component {

  render() {
    return (
      <section className='section' id='contact'>
        <div className='col'>
          <div className='text'>
            <h1>
              Send me a hello,
              or some abuse,<br/>
              or an electric bill
            </h1>
            <p>Maybe just the hello part will be enough.<br/>Feel free to follow me on Twitter, connect on LinkedIn, like my stuff on Dribbble or check out some codings on Github.</p>
          </div>
        </div>
        <div className='col'>
          <div className='social-icons'>
            <ContactIcon href='https://twitter.com/_michaelkc' icon='twitter'></ContactIcon>
            <ContactIcon href='https://github.com/michaelkclements' icon='github'></ContactIcon>
            <ContactIcon href='https://dribbble.com/MichaelKC' icon='dribbble'></ContactIcon>
            <ContactIcon href='https://www.linkedin.com/in/michaelkc' icon='linkedin'></ContactIcon>
          </div>
        </div>
      </section>
    )
  }

}
