import {Container, Text, List, Anchor} from './styles'
import Link from 'next/link'
export function MainNavBar (props) {
  return (
   
    <Container navbar row>
      <Container logo>
        <Text logo>{'</Scafrándo>'}</Text>
      </Container>
      <List row>
        <li><Text menu_item>   
          <Link href="/">
            <Anchor>Home</Anchor>
          </Link>
        </Text></li>
        <li>
          <Text menu_item>
            <Link href="/about">
              <Anchor>About</Anchor>
            </Link>  
          </Text>
        </li>
        <li>
          <Text menu_item>
            <Link href="/curriculum_vitae">
              <Anchor>CV</Anchor>
            </Link>
          </Text>
        </li>
        <li>
          <Text menu_item>
            <Link href="/#search">
              <Anchor>Search</Anchor>
          </Link>
          </Text>
        </li>
      </List>
    </Container>
  )
}