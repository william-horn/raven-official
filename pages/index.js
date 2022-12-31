
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/buttons/Button';
import Container from '../components/Container';
import Text from '../components/typography/Text';
import Title from '../components/typography/Title';
import Searchbar from '../components/Searchbar';
import IconImage from '../components/IconImage';
import Link from 'next/link';
import Icons from '../public/icons';
import Enum from '../enum';
import useLocalStorageState from '../hooks/useLocalStorageState'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IconText from '../components/typography/IconText';

/*
  > TESTING MONGODB CONNECTION
*/


/*
  < TESTING MONGODB CONNECTION
*/

export default function Home() {
  const [homeState, setHomeState] = useState("default");

  return (
    <Container className="min-h-screen p-3">

      <Text>{homeState}</Text>

      <Container>
        {/* <Button.Group 
        initial="one"
        onSelect={first}
        defaultStyle=""
        selectedStyle=""
        >
          <Button.Member id="one">Current</Button.Member>
          <Button.Member id="two">Other</Button.Member>
          <Button.Member id="three">Another</Button.Member>
          <Button.Report></Button.Report>
          <Button.Reset></Button.Reset> 
        </Button.Group> */}

        <Text>Multiple choice:</Text>


        {/* <Button.Group 
        initial="two"
        maxSelect={4}
        onSelect={first}
        defaultStyle=""
        selectedStyle="bg-blue-500"
        >
          <Button.Member id="one" value="First">Current</Button.Member>
          <Button.Member id="two" value="Second">Other</Button.Member>
          <Button.Member id="three" value="Third">Another</Button.Member>
        </Button.Group> */}

        <Button.Group 
        initial={["six"]}
        maxSelect={4}
        selectedStyle="bg-blue-500"
        onSelect={(id, value) => {console.log('selected: ', id, value); setHomeState(value)}}
        onUnselect={(id, value) => console.log('unselect: ', id, value)}
        >
          <Button.Member id="four" value="fourth">Four</Button.Member>
          <Button.Member id="five" value="fifth">Five</Button.Member>
          <Button.Member id="six" value="sixth">Six</Button.Member>
          <Button.Member id="seven" value="seventh">Seven</Button.Member>
          <Button.Member id="eight" value="eighth">Eight</Button.Member>
          <Button.Member id="nine" value="ninth">Nine</Button.Member>
          <Button.Report>Report</Button.Report>
        </Button.Group>

        <Text>Break</Text>

        <Button.Group 
        initial={["six"]}
        maxSelect={4}
        selectedStyle="bg-red-700"
        onSelect={(id, value) => console.log('selected: ', id, value)}
        onUnselect={(id, value) => console.log('unselect: ', id, value)}
        >
          <Button.Member id="four" value="fourth">Four</Button.Member>
          <Button.Member id="five" value="fifth">Five</Button.Member>
          <Button.Member id="six" value="sixth">Six</Button.Member>
          <Button.Member id="seven" value="seventh">Seven</Button.Member>
          <Button.Member id="eight" value="eighth">Eight</Button.Member>
          <Button.Member id="nine" value="ninth">Nine</Button.Member>
          <Button.Report>Report</Button.Report>
        </Button.Group>
      </Container>
      
    </Container>
  )
}
