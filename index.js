var Component = React.createClass({
  render: function() {
    return (
      <div className="component">
        Hello, world!
      </div>
    );
  }
});

React.render(
  <Component />,
  document.getElementById('content')
);