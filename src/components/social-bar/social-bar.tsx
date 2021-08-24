import {Container, Text} from '../styles'
import Image from 'next/image'
export function SocialBar () {
  return (
    <Container social collumn>
      <Text menu_item>
          <a href="https://facebook.com/caio.januario.982" target="_blank">
            <Image 
              src="/icons8-facebook-logo-100.png" 
              width="50" 
              height="50"
            />
          </a>
      </Text>  
      <Text menu_item>
          <a href="https://www.linkedin.com/in/caio-tony-319a88203" target="_blank">
            <Image 
              src="/icons8-linkedin-100.png" 
              width="50" 
              height="50"
            />
          </a>
      </Text>
      <Text menu_item>
          <a href="https://www.reddit.com/user/kafir-coder" target="_blank">
            <Image 
              src="/icons8-reddit-100.png" 
              width="50" 
              height="50"
            />
          </a>
      </Text>
    </Container>
  )
}