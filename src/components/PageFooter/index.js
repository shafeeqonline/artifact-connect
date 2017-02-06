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
  className='col-md-12'
>
    <h5 className="white-text">Lorem Ipsum</h5>
    <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ligula non dictum mattis. Cras porttitor porttitor tortor, a consectetur ipsum sollicitudin nec. Etiam sollicitudin eros ac enim mattis, sed laoreet turpis pulvinar. Curabitur elementum dolor sit amet lacus varius tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget ex venenatis, suscipit velit ut, efficitur urna. Fusce in sagittis enim, non pellentesque leo. Praesent non mauris nec nulla lobortis semper.</p>
</Footer>
    );
  }
}
