import React, {useState} from 'react';
import {SideSheet, Paragraph, Button } from 'evergreen-ui';

function SideSheetExample() {
  const [isShown, setIsShown] = useState(false);
  return (
    <React.Fragment>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setIsShown(true)}>Show Basic Side Sheet</Button>
    </React.Fragment>
  )
};

export default SideSheetExample;