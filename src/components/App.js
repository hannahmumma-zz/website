import React from 'react';
import GlobalStyle from "./styles/GlobalStyle";
import Theme from ".././utils/Theme";
import Wrapper from "./Wrapper";

class App extends React.Component {

  render() {

    return (
    	<>
    		<Theme>
	    		<GlobalStyle />
	    		<Wrapper />
	    	</Theme>
    	</>
    );
  }
}

export default App;
