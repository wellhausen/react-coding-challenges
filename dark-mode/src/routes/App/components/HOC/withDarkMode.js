import React from "react";

function withDarkMode(Component) {
  return class WithDarkMode extends React.Component {
    state = { darkMode: false };

    handleToggle = () => {
      this.setState({ darkMode: !this.state.darkMode });
    };

    render() {
      return (
        <div>
          <Component
            withdarkmode={this.state.darkMode ? true : undefined}
            handleToggle={this.handleToggle}
            {...this.props}
          />
        </div>
      );
    }
  };
}

export default withDarkMode;
