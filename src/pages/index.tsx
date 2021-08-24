import { MainNavBar } from '../components/main-navbar/main-navbar';
import { SocialBar } from '../components/social-bar/social-bar';
import { MainContainer } from '../styles/global'
function HomePage() {
  return (
    <MainContainer>
      <MainNavBar/>
      <SocialBar/>
    </MainContainer>
  )
}

export default HomePage
