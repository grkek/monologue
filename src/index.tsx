import { React } from './StandardLibrary/React';

import * as userInterface from './StandardLibrary/UserInterface';

import { Box } from './Components/Box';
import { ListBox } from './Components/ListBox';
import { Label } from './Components/Label';
import { Button } from './Components/Button';
import { Entry } from './Components/Entry';
import { Image } from './Components/Image';

import { Orientation } from './StandardLibrary/Enums/Orientation';
import { HorizontalSeparator } from './Components/HorizontalSeparator';
import { VerticalSeparator } from './Components/VerticalSeparator';
import { ScrolledWindow } from './Components/ScrolledWindow';

class CustomComponent extends Box {
  render() {
    return (
      <Box>
        <Label>{this.properties.value}</Label>
      </Box>
    );
  }
}

class App extends Box {
  onPressOne() {
    console.log("Hello, from button one!");
  }

  onPressTwo() {
    console.log("Hello, from button two!");
  }

  render() {
    return (
      <Box orientation={Orientation.Vertical}>
        <Image resourcePath={`${globalThis.contentDirectory}/images/logo.png`} />
        <Box>
          <Box className='main-container' orientation={Orientation.Vertical}>
            { /* Implement inline styling for components */}
            <Label style={{ name: 1 }}>Hello, World!</Label>
            <Button onPress={this.onPressOne}>One</Button>
            <HorizontalSeparator className='horizontal-separator' />
            <ListBox>
              <Label>Hello, World!</Label>
              <Label>Hello, World!</Label>
              <Label>Hello, World!</Label>
            </ListBox>
            <Entry>Modify the inner text</Entry>
          </Box>

          <VerticalSeparator />

          <Box className='main-container' orientation={Orientation.Vertical}>
            <Label>Bye, World!</Label>
            <Button onPress={this.onPressTwo}>Two</Button>
            <HorizontalSeparator className='horizontal-separator' />
            <ScrolledWindow>
              <ListBox>
                <Label>1. One</Label>
                <Label>2. Two</Label>
                <Label>3. Three</Label>
                <Label>4. Four</Label>
                <Label>5. Five</Label>
                <Label>6. Six</Label>
                <Label>7. Seven</Label>
                <Label>8. Eight</Label>
                <Label>9. Nine</Label>
                <Label>10. Ten</Label>
              </ListBox>
            </ScrolledWindow>
            <Entry>Modify the inner text</Entry>
          </Box>
        </Box>
        <CustomComponent value='I am a value!'/>
      </Box>
    );
  }
};

React.createRootAndRender(<App />, userInterface.getComponentById('root'));