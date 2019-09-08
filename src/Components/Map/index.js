import React from 'react';
import ReactDOM from 'react-dom'

const Map = React.createClass({
    iframe: function () {
      return {
        __html: this.props.iframe
      }
    },
  
    render: function() {
      return (
        <div>
          <div dangerouslySetInnerHTML={ this.iframe() } />
        </div>
      );
    }
  });
  
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.7804832565807!2d-122.167682784036!3d47.72750947919291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900dbe8d81dfb1%3A0xcdf886b9c8fa8ad9!2sKamiakin%20Middle%20School!5e0!3m2!1sen!2sus!4v1567902524597!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'; 
  
  ReactDOM.render(
    <Map iframe={iframe} />,
    document.getElementById('container')
  );

  export default Map;