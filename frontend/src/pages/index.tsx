import type { NextPage } from 'next'
import Image from 'next/image';
import PrimaryButton from '../components/buttons/PrimaryButton';
import LayoutDefault from '../components/layout';
import BgDefault from '../components/layout/BgDefault';

const Home: NextPage = () => {
  return (
    <BgDefault>
      <LayoutDefault>
        <main>
          <div className={` hidden md:block`}>
            <Image src={'/img/airplane-in-sky.jpg'} 
            layout={'fill'}/>
          </div>

          <div className={`fixed z-10 right-8 bottom-8`}>
            <PrimaryButton>
              Buscar por passageiros
            </PrimaryButton>
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  )
}

export default Home;