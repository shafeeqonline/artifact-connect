import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import './page-footer.scss'
export default class PageFooter extends Component {
  render() {
    return (
      <Footer copyrights="&copy; 2017 App Exchange, All rights reserved"
  moreLinks={
    <a className="grey-text text-lighten-3 right" href="https://github.com/shafeeqonline/artifact-connect"><img className='git-logo' src='src/components/PageFooter/github.png' alt='Git repo'/></a>
  }
  links={
    <ul>
      <li><h4>You Need Help</h4></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Documentation Support / Contact Us</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Registry Status</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Website Issues</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">CLI Issues</a></li>
      <li><a className="grey-text text-lighten-4 text-styling" href="#!">Security</a></li>
    </ul>
  }
  className='col-md-12 user-footer'
>
    
</Footer>
    );
  }
}
